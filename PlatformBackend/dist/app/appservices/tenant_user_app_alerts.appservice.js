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
const tenant_user_app_alertsDto_1 = require("../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_alertsDto");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
const tenant_user_app_alerts_entity_1 = require("../../submodules/Ecommerce-Platform-Entities/tenant_user_app_alerts.entity");
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_user_app_alerts.mapper');
let Tenant_User_App_AlertsAppService = class Tenant_User_App_AlertsAppService extends AppServiceBase_1.default {
    constructor(tenant_user_app_alertRepository, http) {
        super(http, tenant_user_app_alertRepository, tenant_user_app_alerts_entity_1.Tenant_User_App_Alert, tenant_user_app_alerts_entity_1.Tenant_User_App_Alert, tenant_user_app_alertsDto_1.Tenant_User_App_AlertsDto, dto.tenant_user_app_alertsentityJson, dto.tenant_user_app_alertsdtoJson, dto.tenant_user_app_alertsentityToDtoJson, dto.tenant_user_app_alertsdtoToEntityJson);
        this.tenant_user_app_alertRepository = tenant_user_app_alertRepository;
        this.http = http;
    }
};
Tenant_User_App_AlertsAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenant_user_app_alerts_entity_1.Tenant_User_App_Alert)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Tenant_User_App_AlertsAppService);
exports.default = Tenant_User_App_AlertsAppService;
//# sourceMappingURL=tenant_user_app_alerts.appservice.js.map