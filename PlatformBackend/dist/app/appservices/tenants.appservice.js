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
const tenants_entity_1 = require("../../submodules/Ecommerce-Platform-Entities/tenants.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenantsDto_1 = require("../../submodules/Ecommerce-Platform-Dtos/tenantsDto");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenants.mapper');
let TenantsAppService = class TenantsAppService extends AppServiceBase_1.default {
    constructor(tenantRepository, http) {
        super(http, tenantRepository, tenants_entity_1.Tenant, tenants_entity_1.Tenant, tenantsDto_1.TenantsDto, dto.tenantsentityJson, dto.tenantsdtoJson, dto.tenantsentityToDtoJson, dto.tenantsdtoToEntityJson);
        this.tenantRepository = tenantRepository;
        this.http = http;
    }
};
TenantsAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenants_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], TenantsAppService);
exports.default = TenantsAppService;
//# sourceMappingURL=tenants.appservice.js.map