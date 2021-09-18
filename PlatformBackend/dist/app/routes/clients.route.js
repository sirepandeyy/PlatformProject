"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const common_1 = require("@nestjs/common");
const clients_facade_1 = require("../facade/clients.facade");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const RequestModelQuery_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModelQuery");
let ClientsRoutes = class ClientsRoutes {
    constructor(clientsFacade) {
        this.clientsFacade = clientsFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['CLIENTS_ADD', 'CLIENTS_UPDATE', 'CLIENTS_DELETE'];
        this.serviceName = ['CLIENTS_SERVICE', 'CLIENTS_SERVICE', 'CLIENTS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfClientsDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'CLIENTS_ADD':
                                console.log("Inside CLIENTS_ADD Topic");
                                responseModelOfClientsDto = await this.createClients(result["message"]);
                                break;
                            case 'CLIENTS_UPDATE':
                                console.log("Inside CLIENTS_UPDATE Topic");
                                responseModelOfClientsDto = await this.updateClients(result["message"]);
                                break;
                            case 'CLIENTS_DELETE':
                                console.log("Inside CLIENTS_DELETE Topic");
                                responseModelOfClientsDto = await this.deleteClients(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfClientsDto = result["message"];
                        responseModelOfClientsDto.setSocketId(requestModelOfClientsDto.SocketId);
                        responseModelOfClientsDto.setCommunityUrl(requestModelOfClientsDto.CommunityUrl);
                        responseModelOfClientsDto.setRequestId(requestModelOfClientsDto.RequestGuid);
                        responseModelOfClientsDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfClientsDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfClientsDto);
                        }
                    }
                    catch (error) {
                        console.log("Inside Catch.........");
                        console.log(error, result);
                        for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
                            const element = result.OnFailureTopicsToPush[index];
                            let errorResult = new ResponseModel_1.ResponseModel(null, null, null, null, null, null, null, null, null);
                            ;
                            errorResult.setStatus(new Message_1.Message("500", error, null));
                            let requestModelOfClientsDto = result["message"];
                            errorResult.setSocketId(requestModelOfClientsDto.SocketId);
                            errorResult.setCommunityUrl(requestModelOfClientsDto.CommunityUrl);
                            errorResult.setRequestId(requestModelOfClientsDto.RequestGuid);
                            this.sns_sqs.publishMessageToTopic(element, errorResult);
                        }
                    }
                };
            })());
        }
    }
    allClients() {
        try {
            return this.clientsFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    ClientById(id) {
        try {
            console.log("id is............." + JSON.stringify(id));
            return this.clientsFacade.getByIds([id]);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    searchClients(req) {
        try {
            console.log("Inside controller ......CLIENTS");
            let requestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
            console.log("RESPONSEMODELQUERY" + JSON.stringify(requestModelQuery));
            console.log("FILTER" + JSON.stringify(requestModelQuery.Filter));
            console.log("CHILDREN" + JSON.stringify(requestModelQuery.Children));
            return this.clientsFacade.search(requestModelQuery);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createClients(body) {
        try {
            let result = await this.clientsFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateClients(body) {
        try {
            console.log("Executing update query..............");
            return await this.clientsFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteClients(body) {
        try {
            return this.clientsFacade.deleteById(body);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsRoutes.prototype, "allClients", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientsRoutes.prototype, "ClientById", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientsRoutes.prototype, "searchClients", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], ClientsRoutes.prototype, "createClients", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], ClientsRoutes.prototype, "updateClients", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], ClientsRoutes.prototype, "deleteClients", null);
ClientsRoutes = __decorate([
    common_1.Controller('clients'),
    __metadata("design:paramtypes", [clients_facade_1.ClientsFacade])
], ClientsRoutes);
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=clients.route.js.map