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
exports.UsersRoutes = void 0;
const common_1 = require("@nestjs/common");
const users_facade_1 = require("../facade/users.facade");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const RequestModelQuery_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModelQuery");
let UsersRoutes = class UsersRoutes {
    constructor(usersFacade) {
        this.usersFacade = usersFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['USERS_ADD', 'USERS_UPDATE', 'USERS_DELETE'];
        this.serviceName = ['USERS_SERVICE', 'USERS_SERVICE', 'USERS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfUsersDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'USERS_ADD':
                                console.log("Inside USERS_ADD Topic");
                                responseModelOfUsersDto = await this.createUsers(result["message"]);
                                break;
                            case 'USERS_UPDATE':
                                console.log("Inside USERS_UPDATE Topic");
                                responseModelOfUsersDto = await this.updateUsers(result["message"]);
                                break;
                            case 'USERS_DELETE':
                                console.log("Inside USERS_DELETE Topic");
                                responseModelOfUsersDto = await this.deleteUsers(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfUsersDto = result["message"];
                        responseModelOfUsersDto.setSocketId(requestModelOfUsersDto.SocketId);
                        responseModelOfUsersDto.setCommunityUrl(requestModelOfUsersDto.CommunityUrl);
                        responseModelOfUsersDto.setRequestId(requestModelOfUsersDto.RequestGuid);
                        responseModelOfUsersDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfUsersDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfUsersDto);
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
                            let requestModelOfUsersDto = result["message"];
                            errorResult.setSocketId(requestModelOfUsersDto.SocketId);
                            errorResult.setCommunityUrl(requestModelOfUsersDto.CommunityUrl);
                            errorResult.setRequestId(requestModelOfUsersDto.RequestGuid);
                            this.sns_sqs.publishMessageToTopic(element, errorResult);
                        }
                    }
                };
            })());
        }
    }
    allUsers() {
        try {
            return this.usersFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    UserById(id) {
        try {
            console.log("id is............." + JSON.stringify(id));
            return this.usersFacade.getByIds([id]);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    searchUsers(req) {
        try {
            console.log("Inside controller ......CLIENTS");
            let requestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
            console.log("RESPONSEMODELQUERY" + JSON.stringify(requestModelQuery));
            console.log("FILTER" + JSON.stringify(requestModelQuery.Filter));
            console.log("CHILDREN" + JSON.stringify(requestModelQuery.Children));
            return this.usersFacade.search(requestModelQuery);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createUsers(body) {
        try {
            let result = await this.usersFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateUsers(body) {
        try {
            console.log("Executing update query..............");
            return await this.usersFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteUsers(body) {
        try {
            return this.usersFacade.deleteById(body);
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
], UsersRoutes.prototype, "allUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersRoutes.prototype, "UserById", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersRoutes.prototype, "searchUsers", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], UsersRoutes.prototype, "createUsers", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], UsersRoutes.prototype, "updateUsers", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], UsersRoutes.prototype, "deleteUsers", null);
UsersRoutes = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_facade_1.UsersFacade])
], UsersRoutes);
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=users.route.js.map