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
exports.Tenant_User_App = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenant_apps_entity_1 = require("./tenant_apps.entity");
const tenant_users_entity_1 = require("./tenant_users.entity");
const tenant_user_app_alerts_entity_1 = require("./tenant_user_app_alerts.entity");
const tenant_user_app_roles_entity_1 = require("./tenant_user_app_roles.entity");
let Tenant_User_App = class Tenant_User_App extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_user_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_User_App.prototype, "tenant_user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_app_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_User_App.prototype, "tenant_app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_user_app_permissions", nullable: false }),
    __metadata("design:type", String)
], Tenant_User_App.prototype, "tenant_user_app_permissions", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenant_apps_entity_1.Tenant_App, (tenant_apps) => tenant_apps.id),
    typeorm_1.JoinColumn({ name: "tenant_app_id" }),
    __metadata("design:type", Array)
], Tenant_User_App.prototype, "tenant_apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenant_users_entity_1.Tenant_User, (tenant_users) => tenant_users.id),
    typeorm_1.JoinColumn({ name: "tenant_user_id" }),
    __metadata("design:type", Array)
], Tenant_User_App.prototype, "tenant_users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_app_alerts_entity_1.Tenant_User_App_Alert, (tenant_user_app_alerts) => tenant_user_app_alerts.tenant_user_apps),
    __metadata("design:type", Array)
], Tenant_User_App.prototype, "tenant_user_app_alert", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_app_roles_entity_1.Tenant_User_App_Role, (tenant_user_app_roles) => tenant_user_app_roles.tenant_user_apps),
    __metadata("design:type", Array)
], Tenant_User_App.prototype, "tenant_user_app_roles", void 0);
Tenant_User_App = __decorate([
    typeorm_1.Entity('tenant_user_apps', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], Tenant_User_App);
exports.Tenant_User_App = Tenant_User_App;
//# sourceMappingURL=tenant_user_apps.entity.js.map