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
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const http_status_enum_1 = require("@nestjs/common/enums/http-status.enum");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const ResponseModel_1 = require("../Ecommerce-Platform-Common/ResponseModel");
const ServiceOperationResultType_1 = require("../Ecommerce-Platform-Common/ServiceOperationResultType");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
const SNS_SQS_1 = require("../Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const conditionOperation_1 = require("../Ecommerce-Platform-Common/conditionOperation");
const condition_1 = require("../Ecommerce-Platform-Common/condition");
const objectMapper = require('object-mapper');
var pluralize = require('pluralize');
var LRU = require("lru-cache"), options = {
    max: 500,
    length: function (n, key) { return n * 2 + key.length; },
    dispose: function (key, n) { n.close(); },
    maxAge: 1000 * 60 * 60
}, cache = new LRU(options), otherCache = new LRU(100);
let AppService = class AppService {
    constructor(http, genericRepository, type3, entityClassType, dtoClassType, entityMap, dtoMap, entityToDtoMap, dtoToEntityMap) {
        this.http = http;
        this.genericRepository = genericRepository;
        this.type3 = type3;
        this.entityClassType = entityClassType;
        this.dtoClassType = dtoClassType;
        this.entityMap = {};
        this.dtoMap = {};
        this.entityToDtoMap = {};
        this.dtoToEntitymap = {};
        this.dict = {};
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.entityMap = entityMap;
        this.dtoMap = dtoMap;
        this.entityToDtoMap = entityToDtoMap;
        this.dtoToEntitymap = dtoToEntityMap;
    }
    addDtoMap(map) {
        this.entityMap = map;
    }
    addEntityMap(map) {
        this.dtoMap = map;
    }
    addEntityToDtoMap(map) {
        this.entityToDtoMap = map;
    }
    addDtoToEntityMap(map) {
        this.dtoToEntitymap = map;
    }
    async mapToDto(entities) {
        try {
            let result = [];
            let dto;
            Promise.all(entities.map(async (entity) => {
                await result.push(class_transformer_1.plainToClass(this.dtoClassType, objectMapper(entity, this.entityToDtoMap)));
            }));
            return result;
        }
        catch (error) {
            throw new http_exception_1.HttpException(error, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async mapToEntity(dtos) {
        try {
            let result = [];
            let entity;
            Promise.all(dtos.map(async (dto) => {
                await result.push(class_transformer_1.plainToClass(this.entityClassType, objectMapper(dto, this.entityToDtoMap)));
            }));
            return result;
        }
        catch (error) {
            throw new http_exception_1.HttpException(error, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAll() {
        try {
            let result = await this.genericRepository.find({});
            let final_result = new ResponseModel_1.ResponseModel("123", null, null, "123", "123", "gft", null, null, null);
            console.log("result is....." + JSON.stringify(result));
            final_result.setDataCollection(await this.mapToDto(result));
            return final_result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new Error(error);
        }
    }
    async create(entity) {
        try {
            await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
            var result = [];
            let result1;
            let requestGuid = entity.RequestGuid;
            let socketId = entity.SocketId;
            await Promise.all(entity.DataCollection.map(async (entity_sample) => {
                console.log("Map is......" + JSON.stringify(this.entityMap));
                result1 = await this.genericRepository.createQueryBuilder().insert()
                    .values(objectMapper(entity_sample, this.entityMap))
                    .returning('*')
                    .execute();
                console.log("result is......." + JSON.stringify(result1));
                await result.push(result1.generatedMaps[0]);
                await console.log("present result is......" + JSON.stringify(result));
            }));
            console.log("Returning result1....." + JSON.stringify(result));
            let final_result = new ResponseModel_1.ResponseModel(entity.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", null, null, null, entity.SocketId, entity.CommunityUrl);
            final_result.setDataCollection(result);
            final_result.setSocketId(entity.SocketId);
            return final_result;
        }
        catch (error) {
            console.log("Error occured while inserting entity....." + error);
            let final_result = new ResponseModel_1.ResponseModel(entity.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.error, "500", error, null, null, entity.SocketId, entity.CommunityUrl);
            throw new http_exception_1.HttpException(final_result, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        ;
    }
    async updateEntity(dtos) {
        try {
            await console.log("Inside update of generic repository...entity is...." + JSON.stringify(dtos));
            var result = [];
            var ids = [];
            let result1;
            var result2;
            var entities = [];
            await Promise.all(dtos.DataCollection.map(async (dto_sample) => {
                console.log("Entity sample is......" + JSON.stringify(dto_sample));
                console.log("Map is......" + JSON.stringify(this.entityMap));
                console.log("result....." + JSON.stringify(objectMapper(dto_sample, this.entityMap)));
                await entities.push(objectMapper(dto_sample, this.entityMap));
                result1 = await this.genericRepository.update(dto_sample.Id, dto_sample);
                await result.push(result1);
                console.log("result is......." + JSON.stringify(result1));
                await console.log("present result is......" + JSON.stringify(result));
            }));
            let final_result = new ResponseModel_1.ResponseModel(dtos.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", null, null, null, dtos.SocketId, dtos.CommunityUrl);
            final_result.setDataCollection(dtos.DataCollection);
            return final_result;
        }
        catch (err) {
            let final_result = new ResponseModel_1.ResponseModel(dtos.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.failure, "500", err, null, [err], dtos.SocketId, dtos.CommunityUrl);
            final_result.setDataCollection(dtos.DataCollection);
            final_result.setMessage("500", err);
            throw new http_exception_1.HttpException(final_result, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteById(ids) {
        const entities = await this.getByIds(ids);
        console.log("Entites to be deleted are......" + JSON.stringify(entities));
        if (entities.getDataCollection().length != 0) {
            let result = await this.mapToEntity(entities.getDataCollection());
            console.log("Result is....." + JSON.stringify(result));
            await this.genericRepository.remove(result);
            console.log("delete ok");
            let final_result = new ResponseModel_1.ResponseModel(null, null, null, "200", null, null, null, null, null);
            final_result.setDataCollection(entities.getDataCollection());
            return final_result;
        }
        throw new http_exception_1.HttpException("No such id found ", http_status_enum_1.HttpStatus.NOT_FOUND);
    }
    async getByIds(id) {
        try {
            let final_result = new ResponseModel_1.ResponseModel("123", null, null, "123", "123", "gft", null, null, null);
            console.log("ids...." + JSON.stringify(id));
            final_result.setDataCollection(await this.mapToDto(await this.genericRepository.findByIds(id)));
            return final_result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new Error(error);
        }
    }
    async search(requestModel, isCustomApi, entityArray) {
        try {
            let caseSensitiveSearch = true;
            let conditions = requestModel.Filter.Conditions;
            if (typeof conditions !== 'undefined' && conditions.length > 0) {
                if (typeof conditions[0].IsCaseInSensitiveSearch !== 'undefined' && conditions[0].IsCaseInSensitiveSearch === false) {
                    caseSensitiveSearch = requestModel.Filter.Conditions[0].IsCaseInSensitiveSearch;
                }
            }
            console.log(caseSensitiveSearch);
            console.log("Inside Search..........");
            let queryField = null;
            if (isCustomApi != null && isCustomApi == true) {
                queryField = await this.createQueryByCustomApiRequirement(requestModel, entityArray);
            }
            else {
                queryField = await this.createQueryByRequestModelQuery(requestModel, caseSensitiveSearch);
            }
            queryField = await this.divideQueryByPageSizeAndPageNo(requestModel, queryField);
            console.log("Final Ultimate Query is.................." + queryField.getSql());
            let result = await queryField.getMany();
            let final_result = new ResponseModel_1.ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", null, null, null, null, null);
            console.log("Setting result......");
            await final_result.setDataCollection(result);
            return final_result;
        }
        catch (err) {
            console.log("Error is......." + JSON.stringify(err));
            let final_result = new ResponseModel_1.ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType_1.ServiceOperationResultType.error, "500", err, null, null, null, err);
            throw final_result;
        }
        ;
    }
    async createQueryByRequestModelQuery(requestModel, isCaseInsensitiveSearch) {
        try {
            console.log("Inside createQueryByRequestModelQuery baby......requestModel is...." + JSON.stringify(requestModel));
            let orderBy = requestModel.Filter.IsOrderByFieldAsc == null ? true : requestModel.Filter.IsOrderByFieldAsc;
            let orderByField = requestModel.Filter.OrderByField == null ? 'Id' : requestModel.Filter.OrderByField;
            console.log("requestmodel.children is....." + requestModel.Children);
            console.log("here......12345");
            let queryField = this.genericRepository.createQueryBuilder(requestModel.Children[0]);
            if (requestModel.Children != null && requestModel.Children.length > 0) {
                for (let i = 1; i < requestModel.Children.length; i++) {
                    queryField = queryField.leftJoinAndSelect(requestModel.Children[0] + "." + requestModel.Children[i], requestModel.Children[i]);
                }
            }
            queryField = await this.assignConditionsToRequestModelQueryV2(requestModel, queryField, isCaseInsensitiveSearch);
            if (orderBy == true)
                return queryField.orderBy(requestModel.Children[0] + "." + orderByField, 'ASC');
            else
                return queryField.orderBy(requestModel.Children[0] + "." + orderByField, 'DESC');
            return queryField;
        }
        catch (err) {
            console.log("Error thrown from createQueryByRequestModelQuery....... Error is....." + JSON.stringify(err));
            throw err;
        }
    }
    async createQueryByCustomApiRequirement(requestModel, entityArrays) {
        try {
            console.log("Inside createQueryByCustomApiRequirement baby......requestModel is...." + JSON.stringify(requestModel));
            let isCaseInsensitiveSearch = false;
            console.log("entity array is ..................", entityArrays);
            let orderBy = true;
            let orderByField = 'Id';
            if (typeof (requestModel.Filter.IsOrderByFieldAsc) != 'undefined') {
                console.log("Undefined Condition Failed");
                orderBy = requestModel.Filter.IsOrderByFieldAsc;
            }
            if (typeof (requestModel.Filter.OrderByField) != 'undefined')
                orderByField = requestModel.Filter.OrderByField;
            console.log("OrderByField is.......", orderByField);
            let queryField = this.genericRepository.createQueryBuilder(entityArrays[0][0]);
            if (entityArrays != null) {
                entityArrays.forEach((entityArray) => {
                    console.log(entityArray);
                    queryField = queryField.leftJoinAndSelect(entityArray[0] + "." + entityArray[1], entityArray[1]);
                });
            }
            queryField = await this.assignConditionsToRequestModelQueryV2(requestModel, queryField);
            console.log("OrderByField is.......", orderByField);
            if (orderBy == true)
                return queryField.orderBy(requestModel.Children[0] + "." + orderByField, 'ASC');
            else
                return queryField.orderBy(requestModel.Children[0] + "." + orderByField, 'DESC');
        }
        catch (err) {
            console.log("Error thrown from createQueryByCustomApiRequirement....... Error is....." + JSON.stringify(err));
            throw err;
        }
    }
    async divideQueryByPageSizeAndPageNo(requestModel, queryField) {
        try {
            if (requestModel.Filter.PageInfo != null) {
                queryField = queryField.skip((requestModel.Filter.PageInfo.PageSize) *
                    (requestModel.Filter.PageInfo.PageNumber - 1))
                    .take(requestModel.Filter.PageInfo.PageSize);
            }
            return queryField;
        }
        catch (err) {
            console.log("Error thrown from createQueryByRequestModelQuery....... Error is....." + JSON.stringify(err));
            throw err;
        }
    }
    async assignConditionsToRequestModelQuery(requestModel, queryField) {
        try {
            console.log("Length is...." + requestModel.Filter.Conditions.length + "\n\n\n\n\n\n\n");
            let i = 0;
            if (requestModel.Filter.Conditions != null && requestModel.Filter.Conditions.length > 0) {
                i = requestModel.Filter.Conditions.length;
                let myJSON = {};
                let fieldValue = requestModel.Filter.Conditions[0].FieldValue;
                console.log("Myjson init is......" + JSON.stringify(myJSON));
                if (requestModel.Filter.Conditions[0].FieldName.indexOf('.') > -1) {
                    if (typeof (fieldValue) == typeof ('')) {
                        myJSON['fieldName' + 0] = `%${requestModel.Filter.Conditions[0].FieldValue}%`;
                        queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + " LIKE :fieldName" + 0, myJSON);
                    }
                    else if (fieldValue == null) {
                        myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
                        queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + " is NULL");
                    }
                    else {
                        myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
                        queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + "=:fieldName" + 0, myJSON);
                    }
                }
                else {
                    if (typeof (fieldValue) == typeof ('')) {
                        myJSON['fieldName' + 0] = `%${requestModel.Filter.Conditions[0].FieldValue}%`;
                        queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + " LIKE :fieldName" + 0, myJSON);
                    }
                    else if (fieldValue == null) {
                        myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
                        queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + " is NULL");
                    }
                    else {
                        myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
                        queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName" + 0, myJSON);
                    }
                }
                console.log("\n\n\n\n\nBefore entering second condition.....query generated is........" + queryField.getQuery() + "\n\n\n\n\n\n\n\n\n\n");
                let str1 = '';
                for (i = 1; i < requestModel.Filter.Conditions.length; i++) {
                    if (requestModel.Filter.Conditions[i].FieldName.indexOf('.') > -1)
                        str1 = requestModel.Filter.Conditions[i].FieldName;
                    else
                        str1 = requestModel.Children[0] + "." + requestModel.Filter.Conditions[i].FieldName;
                    console.log(requestModel.Filter.Conditions[i]);
                    console.log("type is......" + typeof (requestModel.Filter.Conditions[i - 1].ConditionalSymbol));
                    let fieldValue = requestModel.Filter.Conditions[i].FieldValue;
                    if (requestModel.Filter.Conditions[i - 1].ConditionalSymbol == conditionOperation_1.ConditionalOperation.Or) {
                        let myJSON = {};
                        if (typeof (fieldValue) == typeof ('')) {
                            myJSON['fieldName' + i] = `%${requestModel.Filter.Conditions[i].FieldValue}%`;
                            queryField = queryField.andWhere(str1 + " LIKE :fieldName" + i, myJSON);
                        }
                        else if (fieldValue == null) {
                            queryField = queryField.andWhere(str1 + " is null ");
                        }
                        else {
                            myJSON['fieldName' + i] = requestModel.Filter.Conditions[i].FieldValue;
                            queryField = queryField.andWhere(str1 + "=:fieldName" + i, myJSON);
                        }
                    }
                    else {
                        let myJSON = {};
                        if (typeof (fieldValue) == typeof ('')) {
                            myJSON['fieldName' + i] = `%${requestModel.Filter.Conditions[i].FieldValue}%`;
                            queryField = queryField.andWhere(str1 + " LIKE :fieldName" + i, myJSON);
                        }
                        else {
                            myJSON['fieldName' + i] = requestModel.Filter.Conditions[i].FieldValue;
                            queryField = queryField.andWhere(str1 + "=:fieldName" + i, myJSON);
                        }
                    }
                }
            }
            return queryField;
        }
        catch (err) {
            console.log("Error thrown from assignConditionsToRequestModelQuery....... Error is....." + JSON.stringify(err));
            throw err;
        }
    }
    async assignConditionsToRequestModelQueryV2(requestModel, queryField, isCaseInsensitiveSearch) {
        try {
            console.log("\n\n\n\nInside assignConditionsToRequestModelQueryV3.........................\n\n\n\n");
            let totalConditionalArray = [];
            let count = 0;
            for (let i = 0; i < requestModel.Filter.Conditions.length; i++) {
                console.log(totalConditionalArray);
                if (requestModel.Filter.Conditions[i].ConditionalSymbol != conditionOperation_1.ConditionalOperation.Or) {
                    if (count != 0) {
                        totalConditionalArray.push(count + 1);
                        count = 0;
                    }
                    else {
                        totalConditionalArray.push(0);
                    }
                }
                else {
                    count = count + 1;
                    totalConditionalArray.push(count);
                }
            }
            console.log("totalConditionalArray......", totalConditionalArray);
            let finalConditionalArray = [];
            let flag = 0;
            for (let i = totalConditionalArray.length - 1; i > -1; i = i - 1) {
                console.log("flag....", flag);
                if (totalConditionalArray[i] == 0) {
                    finalConditionalArray.unshift(-1);
                    flag = 0;
                }
                else {
                    if (flag == 0) {
                        finalConditionalArray.unshift(totalConditionalArray[i]);
                        flag = 1;
                    }
                }
            }
            console.log("After 1 st change.....finalConditionalArray.....", finalConditionalArray);
            if (totalConditionalArray.length == 1 && totalConditionalArray[0] == 0) {
                finalConditionalArray = [-1];
            }
            console.log("finalConditionalArray.......", finalConditionalArray);
            let i = 0;
            for (let k = 0; k < finalConditionalArray.length; k++) {
                let value = finalConditionalArray[k];
                if (value < 0) {
                    for (let j = 0; j < (value * (-1)); j++) {
                        queryField = this.handleAndCondition(requestModel.Children[0], requestModel.Filter.Conditions[i], queryField, i, isCaseInsensitiveSearch);
                        i += 1;
                    }
                }
                else {
                    queryField = queryField.andWhere(new typeorm_1.Brackets((qb) => {
                        for (let j = 0; j < value; j++) {
                            qb = this.handleOrCondition(requestModel.Children[0], requestModel.Filter.Conditions[i], qb, i, isCaseInsensitiveSearch);
                            i += 1;
                        }
                    }));
                }
            }
            return queryField;
        }
        catch (err) {
            console.log("Error thrown from assignConditionsToRequestModelQueryV2....... Error is....." + JSON.stringify(err));
            throw err;
        }
    }
    handleOrCondition(sourceEntity, condition, queryField, sequence, isCaseInsensitiveSearch) {
        console.log("Handling Or Condition");
        let myJSON = {};
        if (typeof (condition.FieldValue) == typeof ('')) {
            let likeWildCard = " LIKE ";
            if (isCaseInsensitiveSearch) {
                likeWildCard = " ILIKE ";
            }
            if (condition.FieldName.indexOf('.') > -1) {
                myJSON['fieldName' + sequence] = `%${condition.FieldValue}%`;
                queryField = queryField.orWhere(condition.FieldName + likeWildCard + ":fieldName" + sequence, myJSON);
            }
            else {
                let myJSON = {};
                myJSON['fieldName' + sequence] = `%${condition.FieldValue}%`;
                queryField = queryField.orWhere(sourceEntity + "." + condition.FieldName + likeWildCard + ":fieldName" + sequence, myJSON);
            }
        }
        else {
            if (condition.FieldName.indexOf('.') > -1) {
                myJSON['fieldName' + sequence] = condition.FieldValue;
                queryField = queryField.orWhere(condition.FieldName + "=:fieldName" + sequence, myJSON);
            }
            else {
                myJSON['fieldName' + sequence] = condition.FieldValue;
                queryField = queryField.orWhere(sourceEntity + "." + condition.FieldName + "=:fieldName" + sequence, myJSON);
            }
        }
        return queryField;
    }
    handleAndCondition(sourceEntity, condition, queryField, sequence, isCaseInsensitiveSearch) {
        console.log("Handling And Condition");
        let myJSON = {};
        console.log(typeof (condition.FieldValue));
        if (typeof (condition.FieldValue) == typeof ('')) {
            let likeWildCard = " LIKE ";
            if (isCaseInsensitiveSearch) {
                likeWildCard = " ILIKE ";
            }
            console.log("Entered String Cond.....\n\n\n\n");
            if (condition.FieldName.indexOf('.') > -1) {
                myJSON['fieldName' + sequence] = `%${condition.FieldValue}%`;
                console.log("1......", myJSON);
                queryField = queryField.andWhere(condition.FieldName + likeWildCard + ":fieldName" + sequence, myJSON);
            }
            else {
                let myJSON = {};
                myJSON['fieldName' + sequence] = `%${condition.FieldValue}%`;
                console.log("2......", myJSON);
                console.log("\n********** isCaseSensitiveSearch Inside HandleANDCondition:", isCaseInsensitiveSearch, "**********\n");
                queryField = queryField.andWhere(sourceEntity + "." + condition.FieldName + likeWildCard + ":fieldName" + sequence, myJSON);
            }
        }
        else {
            if (condition.FieldName.indexOf('.') > -1) {
                myJSON['fieldName' + sequence] = condition.FieldValue;
                queryField = queryField.andWhere(condition.FieldName + "=:fieldName" + sequence, myJSON);
            }
            else {
                myJSON['fieldName' + sequence] = condition.FieldValue;
                queryField = queryField.andWhere(sourceEntity + "." + condition.FieldName + "=:fieldName" + sequence, myJSON);
            }
        }
        return queryField;
    }
};
AppService = __decorate([
    injectable_decorator_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService, typeorm_1.Repository, Object, Object, Object, Object, Object, Object, Object])
], AppService);
exports.default = AppService;
//# sourceMappingURL=AppServiceBase.js.map