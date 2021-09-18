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
exports.Tenant_User_App_Role = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const roles_entity_1 = require("./roles.entity");
const tenant_user_apps_entity_1 = require("./tenant_user_apps.entity");
let Tenant_User_App_Role = class Tenant_User_App_Role extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_user_app_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_User_App_Role.prototype, "tenant_user_app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "role_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_User_App_Role.prototype, "role_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => roles_entity_1.Role, (roles) => roles.id),
    typeorm_1.JoinColumn({ name: "role_id" }),
    __metadata("design:type", Array)
], Tenant_User_App_Role.prototype, "roles", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenant_user_apps_entity_1.Tenant_User_App, (tenant_user_apps) => tenant_user_apps.id),
    typeorm_1.JoinColumn({ name: "tenant_user_app_id" }),
    __metadata("design:type", Array)
], Tenant_User_App_Role.prototype, "tenant_user_apps", void 0);
Tenant_User_App_Role = __decorate([
    typeorm_1.Entity('tenant_user_app_roles', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], Tenant_User_App_Role);
exports.Tenant_User_App_Role = Tenant_User_App_Role;
//# sourceMappingURL=tenant_user_app_roles.entity.js.map