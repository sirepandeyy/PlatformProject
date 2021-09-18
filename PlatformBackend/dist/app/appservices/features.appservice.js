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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const featuresDto_1 = require("../../submodules/Ecommerce-Platform-Dtos/featuresDto");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
const features_entity_1 = require("../../submodules/Ecommerce-Platform-Entities/features.entity");
let dto = require('../../submodules/Ecommerce-Platform-Mappings/features.mapper');
let FeaturesAppService = class FeaturesAppService extends AppServiceBase_1.default {
    constructor(featureRepository, http) {
        super(http, featureRepository, features_entity_1.Feature, features_entity_1.Feature, featuresDto_1.FeaturesDto, dto.featuresentityJson, dto.featuresdtoJson, dto.featuresentityToDtoJson, dto.featuresdtoToEntityJson);
        this.featureRepository = featureRepository;
        this.http = http;
    }
};
FeaturesAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(features_entity_1.Feature)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], FeaturesAppService);
exports.default = FeaturesAppService;
//# sourceMappingURL=features.appservice.js.map