"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authMiddleware = require('./Auth/AuthMiddleware');
var authController = require('./Auth/AuthController');
const express = require("express");
const https = require('https');
const fs2 = require('fs');
const options = {
    key: fs2.readFileSync('private.key'),
    cert: fs2.readFileSync('certificate.crt'),
    ca: fs2.readFileSync('ca_bundle.crt')
};
const cors = require("cors");
const socketIo = require("socket.io");
const dictionaryjs_1 = require("dictionaryjs");
const SNS_SQS_1 = require("./submodules/Platform-Api-Gateway-RabbitMQConfig/SNS_SQS");
let environment = process.env.NODE_ENV;
const port = 4000;
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options("*", cors());
app.use(cors());
const server = https.createServer(options, app);
var sockets = [];
let activeConnectionDict = new dictionaryjs_1.Dictionary();
let socketAndDeviceDict = new dictionaryjs_1.Dictionary();
let configFileName = `config-${environment}`;
console.log(configFileName);
if (!environment) {
    console.log("no environment specified using default i.e local environment");
    configFileName = "config-local";
}
var sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "HEAD", "OPTIONS", "PUT"],
        allowedHeaders: ["my-custom-header"],
        credentials: false,
    },
});
// app.get('/connectdevice/:id/:socketid', (req, res) => {
//   let deviceid = parseInt(req.params.id);
//   console.log(typeof deviceid);
//   let socketid = req.params.socketid;
//   if (socketAndDeviceDict.contains(deviceid) != true) {
//     socketAndDeviceDict.set(socketid, deviceid);
//     console.log("connected");
//     res.send("You're connected");
//   }
//   else {
//     for (
//       let [key, value] of socketAndDeviceDict.entries()) {
//       if (deviceid === value && socketid === key) {
//         res.send("Already connected");
//         console.log("Already Connected");
//       }
//       else { res.send("Cant Connect"); console.log("Cant Connect"); }
//     }
//   }
// });
io.on("connection", (socket) => {
    console.log("client connected with id: ", socket.id);
    // console.log("number of client connected : "+ String(activeConnectionDict.length));
    sockets.push(socket);
    var i = 0;
    activeConnectionDict.set(socket.id, socket);
    console.log("number of client connected : " + String(activeConnectionDict.length));
    activeConnectionDict.set(socket.id, socket);
    console.log("number of client connected : " + String(activeConnectionDict.length));
    socket.emit("socketIdFromServer", { socket_id: socket.id });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        // activeConnectionDict.remove(socket.id);
        activeConnectionDict.remove(socket.id);
        console.log("number of client connected : " + String(activeConnectionDict.length));
        if (socketAndDeviceDict.has(socket.id) === true) {
            activeConnectionDict.remove(socket.id);
            console.log("number of client connected : " + String(activeConnectionDict.length));
        }
        socketAndDeviceDict.remove(socket.id);
        socket.disconnect(true);
    });
});
app.get("/:type", authController.login, async (req, res) => {
    request('http://localhost:3002/' + req.params.type, (error, response, body) => {
        if (error) {
            // If there is an error, tell the user 
            res.send('An erorr occured');
        }
        // Otherwise do something with the API data and send a response
        else {
            res.send(JSON.parse(body));
        }
    });
});
app.get("/:type/:id", async (req, res) => {
    request('http://localhost:3002/' + req.params.type + "/" + req.params.id, (error, response, body) => {
        if (error) {
            // If there is an error, tell the user 
            res.send('An erorr occured');
        }
        // Otherwise do something with the API data and send a response
        else {
            res.send(JSON.parse(body));
        }
    });
});
app.post("/:servicename/:service", async (req, res) => {
    let type = { 'user': 1, 'admin': 2 };
    let requestBody = req.body;
    let method_name = "POST";
    let service_name = req.params.servicename;
    let exchangeName = req.params.service + "_ADD";
    let id = 5;
    let message = JSON.stringify(requestBody);
    console.log(message);
    let data = req.body.DataCollection;
    //if( data[0].role_id == type.admin){
    var myres = sns_sqs.publishMessageToTopics(service_name, //PRODUCT_SERVICE
    exchangeName, //PRODUCT_ADD
    method_name, message, id);
    //}
    res.status(200).send({ message: "request has been taken" });
});
app.put("/:servicename/:service/:id", async (req, res) => {
    let requestBody = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;
    let method_name = "PUT";
    let service_name = req.params.servicename;
    let exchangeName = req.params.service + "_UPDATE";
    let id = req.params.id;
    let message = JSON.stringify(requestBody);
    sns_sqs.publishMessageToTopics(service_name, exchangeName, method_name, message, id);
    res.status(200).send({ message: "request has been taken" });
});
app.delete("/:servicename/:service/:id", async (req, res) => {
    let requestBody = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;
    let message = JSON.stringify(requestBody);
    console.log("message: ", message);
    let method_name = "DELETE";
    let id = req.params.id;
    let service_name = req.params.servicename;
    let exchangeName = req.params.service + "_DELETE";
    sns_sqs.publishMessageToTopics(service_name, exchangeName, method_name, message, id);
    res.status(200).send({ message: "request has been taken" });
});
server.listen(port, () => {
    console.log(process.env.IOT_SERVICE);
    var noOfSocket = 1;
    sns_sqs.listenToServices(noOfSocket, "API_GATEWAY_SERVICE", (result) => {
        let { message } = result;
        console.log(message);
        //getting the browser socket to hom the response needs to be send
        let vSocket = activeConnectionDict.get(message.SocketId);
        // console.log("socket_id response: ", vSocket)
        if (vSocket) {
            console.log("response to client to call call back function", message);
            vSocket.emit("successResponseFromServer", message);
        }
        else {
            vSocket.emit("errorResponseFromServer", message);
        }
    });
    sns_sqs.listenToServices(noOfSocket, "ERROR_RECEIVER", (result) => {
        let { message } = result;
        console.log(message);
        let vSocket = activeConnectionDict.get(message.SocketId);
        // console.log("socket_id response: ", vSocket)
        if (vSocket) {
            vSocket.emit("errorResponseFromServer", message);
        }
        else {
            vSocket.emit("errorResponseFromServer", message);
        }
    });
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=app.js.map