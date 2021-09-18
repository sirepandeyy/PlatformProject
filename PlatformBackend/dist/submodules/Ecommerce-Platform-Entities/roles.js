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
exports.Role = void 0;
const app_roles_1 = require("./app_roles");
const tenant_user_app_roles_1 = require("./tenant_user_app_roles");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const feature_permissions_1 = require("./feature_permissions");
let Role = class Role extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "role_name", }),
    __metadata("design:type", String)
], Role.prototype, "role_name", void 0);
__decorate([
    typeorm_1.Column({ name: "role_priviledge", type: "json" }),
    __metadata("design:type", Object)
], Role.prototype, "role_priviledge", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissions_1.Feature_Permission, (feature_permissions) => feature_permissions.role_id),
    __metadata("design:type", Array)
], Role.prototype, "feature_permissions", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_roles_1.App_Role, (app_roles) => app_roles.app_id),
    __metadata("design:type", Array)
], Role.prototype, "app_roles", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_app_roles_1.Tenant_User_App_Role, (tenant_user_app_roles) => tenant_user_app_roles.role_id),
    __metadata("design:type", Array)
], Role.prototype, "tenant_user_app_roles", void 0);
Role = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Role);
exports.Role = Role;
//# sourceMappingURL=roles.js.map