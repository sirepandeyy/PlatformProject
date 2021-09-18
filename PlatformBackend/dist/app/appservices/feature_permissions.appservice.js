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
const feature_permissionsDto_1 = require("../../submodules/Ecommerce-Platform-Dtos/feature_permissionsDto");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
const feature_permissions_entity_1 = require("../../submodules/Ecommerce-Platform-Entities/feature_permissions.entity");
let dto = require('../../submodules/Ecommerce-Platform-Mappings/feature_permissions.mapper');
let Feature_PermissionsAppService = class Feature_PermissionsAppService extends AppServiceBase_1.default {
    constructor(feature_permissionRepository, http) {
        super(http, feature_permissionRepository, feature_permissions_entity_1.Feature_Permission, feature_permissions_entity_1.Feature_Permission, feature_permissionsDto_1.Feature_PermissionsDto, dto.feature_permissionsentityJson, dto.feature_permissionsdtoJson, dto.feature_permissionsentityToDtoJson, dto.feature_permissionsdtoToEntityJson);
        this.feature_permissionRepository = feature_permissionRepository;
        this.http = http;
    }
};
Feature_PermissionsAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(feature_permissions_entity_1.Feature_Permission)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Feature_PermissionsAppService);
exports.default = Feature_PermissionsAppService;
//# sourceMappingURL=feature_permissions.appservice.js.map