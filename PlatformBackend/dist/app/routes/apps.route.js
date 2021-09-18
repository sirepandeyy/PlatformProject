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
exports.AppsRoutes = void 0;
const common_1 = require("@nestjs/common");
const apps_facade_1 = require("../facade/apps.facade");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const RequestModelQuery_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModelQuery");
let AppsRoutes = class AppsRoutes {
    constructor(appsFacade) {
        this.appsFacade = appsFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['APPS_ADD', 'APPS_UPDATE', 'APPS_DELETE'];
        this.serviceName = ['APPS_SERVICE', 'APPS_SERVICE', 'APPS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfAppsDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'APPS_ADD':
                                console.log("Inside APPS_ADD Topic");
                                responseModelOfAppsDto = await this.createApps(result["message"]);
                                break;
                            case 'APPS_UPDATE':
                                console.log("Inside APPS_UPDATE Topic");
                                responseModelOfAppsDto = await this.updateApps(result["message"]);
                                break;
                            case 'APPS_DELETE':
                                console.log("Inside APPS_DELETE Topic");
                                responseModelOfAppsDto = await this.deleteApps(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfAppsDto = result["message"];
                        responseModelOfAppsDto.setSocketId(requestModelOfAppsDto.SocketId);
                        responseModelOfAppsDto.setCommunityUrl(requestModelOfAppsDto.CommunityUrl);
                        responseModelOfAppsDto.setRequestId(requestModelOfAppsDto.RequestGuid);
                        responseModelOfAppsDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfAppsDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfAppsDto);
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
                            let requestModelOfAppsDto = result["message"];
                            errorResult.setSocketId(requestModelOfAppsDto.SocketId);
                            errorResult.setCommunityUrl(requestModelOfAppsDto.CommunityUrl);
                            errorResult.setRequestId(requestModelOfAppsDto.RequestGuid);
                            this.sns_sqs.publishMessageToTopic(element, errorResult);
                        }
                    }
                };
            })());
        }
    }
    allApps() {
        try {
            return this.appsFacade.getAll();
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
            return this.appsFacade.search(requestModelQuery);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    AppById(id) {
        try {
            console.log("id is............." + JSON.stringify(id));
            return this.appsFacade.getByIds([id]);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createApps(body) {
        try {
            let result = await this.appsFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateApps(body) {
        try {
            console.log("Executing update query..............");
            return await this.appsFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteApps(body) {
        try {
            return this.appsFacade.deleteById(body);
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
], AppsRoutes.prototype, "allApps", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppsRoutes.prototype, "searchClients", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppsRoutes.prototype, "AppById", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], AppsRoutes.prototype, "createApps", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], AppsRoutes.prototype, "updateApps", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], AppsRoutes.prototype, "deleteApps", null);
AppsRoutes = __decorate([
    common_1.Controller('apps'),
    __metadata("design:paramtypes", [apps_facade_1.AppsFacade])
], AppsRoutes);
exports.AppsRoutes = AppsRoutes;
//# sourceMappingURL=apps.route.js.map