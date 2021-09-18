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
exports.Tenant_User = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenants_entity_1 = require("./tenants.entity");
const tenant_user_apps_entity_1 = require("./tenant_user_apps.entity");
const users_entity_1 = require("./users.entity");
let Tenant_User = class Tenant_User extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_User.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.Column({ name: "user_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_User.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "identity_provider_subscriber_id", nullable: false }),
    __metadata("design:type", String)
], Tenant_User.prototype, "identity_provider_subscriber_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => users_entity_1.User, (users) => users.id),
    typeorm_1.JoinColumn({ name: "user_Id" }),
    __metadata("design:type", Array)
], Tenant_User.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenants_entity_1.Tenant, (tenants) => tenants.id),
    typeorm_1.JoinColumn({ name: "tenant_Id" }),
    __metadata("design:type", Array)
], Tenant_User.prototype, "tenants", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_apps_entity_1.Tenant_User_App, (tenant_user_apps) => tenant_user_apps.tenant_users),
    __metadata("design:type", Array)
], Tenant_User.prototype, "tenant_user_apps", void 0);
Tenant_User = __decorate([
    typeorm_1.Entity('tenant_users', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], Tenant_User);
exports.Tenant_User = Tenant_User;
//# sourceMappingURL=tenant_users.entity.js.map