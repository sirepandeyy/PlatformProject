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
const tenant_app_featuresDto_1 = require("../../submodules/Ecommerce-Platform-Dtos/tenant_app_featuresDto");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
const tenant_app_features_entity_1 = require("../../submodules/Ecommerce-Platform-Entities/tenant_app_features.entity");
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_app_featuresMapper');
let Tenant_App_FeaturesAppService = class Tenant_App_FeaturesAppService extends AppServiceBase_1.default {
    constructor(tenant_app_featureRepository, http) {
        super(http, tenant_app_featureRepository, tenant_app_features_entity_1.Tenant_App_Feature, tenant_app_features_entity_1.Tenant_App_Feature, tenant_app_featuresDto_1.Tenant_App_FeaturesDto, dto.tenant_app_featuresentityJson, dto.tenant_app_featuresdtoJson, dto.tenant_app_featuresentityToDtoJson, dto.tenant_app_featuresdtoToEntityJson);
        this.tenant_app_featureRepository = tenant_app_featureRepository;
        this.http = http;
    }
};
Tenant_App_FeaturesAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenant_app_features_entity_1.Tenant_App_Feature)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Tenant_App_FeaturesAppService);
exports.default = Tenant_App_FeaturesAppService;
//# sourceMappingURL=tenant_app_features.appservice.js.map