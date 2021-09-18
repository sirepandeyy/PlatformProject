"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
const ServiceOperationResultType_1 = require("./ServiceOperationResultType");
const Message_1 = require("./Message");
// import { TDto } from "../../app/3.1 dtos/TDto";
// export class ResponseModel<T extends TDto> 
class ResponseModel {
    constructor(requestId, data, resultType, errorCode, statusMessage, localizedStatusMessage, message, socketId, communityUrl) {
        this.RequestId = requestId;
        this.DataCollection = data;
        this.ResultType = resultType;
        this.Status = new Message_1.Message(errorCode, statusMessage, localizedStatusMessage, null);
        this.Messages = message;
        this.SocketId = socketId;
        ///this.CommunityUrl = communityUrl;
    }
    getRequestId() {
        return this.RequestId;
    }
    setRequestId(RequestId) {
        this.RequestId = RequestId;
    }
    getCommunityUrl() {
        return this.CommunityUrl;
    }
    setCommunityUrl(communityUrl) {
        this.CommunityUrl = communityUrl;
    }
    getDataCollection() {
        return this.DataCollection;
    }
    setDataCollection(DataCollection) {
        this.DataCollection = DataCollection;
    }
    getResultType() {
        return this.ResultType;
    }
    getData() {
        let t_temp = this.DataCollection != null && this.DataCollection[0] != null ?
            this.DataCollection[0] : null;
        return t_temp;
    }
    //TODO
    // public getDerivedType<D>(): ResponseModel<D>{
    //     Object.create()
    // }
    // public ResponseModel<D> ToDerivedType<D>()
    //         where D : class
    //     {
    //         var baseResponseModel = this;
    //         var derivedResponseModel = new ResponseModel<D>(baseResponseModel.DataCollection.Cast<D>());
    //         derivedResponseModel.RequestId = baseResponseModel.RequestId;
    //         derivedResponseModel.ResultType = baseResponseModel.ResultType;
    //         derivedResponseModel.Messages = baseResponseModel.Messages;
    //         derivedResponseModel.Status = baseResponseModel.Status;
    //         return derivedResponseModel;
    //     }
    // public setResultType(ResultType: ServiceOperationResultType): void {
    //     this.ResultType = ResultType;
    // }
    // public getStatus(): Message {
    //     return this.Status;
    // }
    getSocketId() {
        return this.SocketId;
    }
    setSocketId(socketId) {
        this.SocketId = socketId;
    }
    setStatus(Status) {
        this.Status = Status;
    }
    getMessages() {
        return this.Messages;
    }
    // public setMessages(Messages: Array<Message>): void {
    //     this.Messages = Messages;
    // }
    // Get(id:number):ResponseModel<TDto>|null
    CreateFailureResult(requestId, message, messages, localizedMessage = "", validationCode = "", socketId = "", communityUrl = "") {
        return new ResponseModel(requestId, null, ServiceOperationResultType_1.ServiceOperationResultType.failure, validationCode, message, localizedMessage, messages, socketId, communityUrl);
        //return new ResponseModel<T>(requestId, null
    }
    CreateErrorResult(requestId, errorCode, message = "", localizedMessage = "", socketId = "", communityUrl = "") {
        return new ResponseModel(requestId, null, ServiceOperationResultType_1.ServiceOperationResultType.error, errorCode, message, localizedMessage, null, socketId, communityUrl);
    }
    // CreateErrorResult1(requestId:string , errorCode:string , message:string,localizedMessage:string=""):ResponseModel<T> 
    // {
    //     return new ResponseModel<T>(requestId, null, ServiceOperationResultType.error, errorCode, "","", null);
    // }
    CreateSuccessResult(requestId, data, message, messages, localizedMessage, socketId = "", communityUrl = "") {
        return new ResponseModel(requestId, data, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", message, localizedMessage != null ? localizedMessage : null, messages, socketId, communityUrl);
    }
    echo(arg) {
        return arg;
    }
}
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=ResponseModel.js.map