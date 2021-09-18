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
exports.Tenant = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const clients_entity_1 = require("./clients.entity");
const tenant_apps_entity_1 = require("./tenant_apps.entity");
const tenant_users_entity_1 = require("./tenant_users.entity");
let Tenant = class Tenant extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_name", nullable: false }),
    __metadata("design:type", String)
], Tenant.prototype, "tenant_name", void 0);
__decorate([
    typeorm_1.Column({ name: "description", nullable: false }),
    __metadata("design:type", String)
], Tenant.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: "alias", nullable: true }),
    __metadata("design:type", String)
], Tenant.prototype, "alias", void 0);
__decorate([
    typeorm_1.Column({ name: "published_from", nullable: false }),
    __metadata("design:type", Date)
], Tenant.prototype, "published_from", void 0);
__decorate([
    typeorm_1.Column({ name: "published_till", nullable: false }),
    __metadata("design:type", Date)
], Tenant.prototype, "published_till", void 0);
__decorate([
    typeorm_1.Column({ name: "is_complete", nullable: false }),
    __metadata("design:type", Boolean)
], Tenant.prototype, "is_complete", void 0);
__decorate([
    typeorm_1.Column({ name: "site_image_url_path", nullable: true }),
    __metadata("design:type", String)
], Tenant.prototype, "site_image_url_path", void 0);
__decorate([
    typeorm_1.Column({ name: "status_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant.prototype, "status_id", void 0);
__decorate([
    typeorm_1.Column({ name: "client_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant.prototype, "client_id", void 0);
__decorate([
    typeorm_1.Column({ name: "identity_providers_details", nullable: false, type: "json" }),
    __metadata("design:type", Object)
], Tenant.prototype, "identity_providers_details", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_admin_email", nullable: false }),
    __metadata("design:type", String)
], Tenant.prototype, "tenant_admin_email", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_users_entity_1.Tenant_User, (tenant_users) => tenant_users.tenants),
    __metadata("design:type", Array)
], Tenant.prototype, "tenant_users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_apps_entity_1.Tenant_App, (tenant_apps) => tenant_apps.tenants),
    __metadata("design:type", Array)
], Tenant.prototype, "tenant_apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => clients_entity_1.Client, (ClientsEntity) => ClientsEntity.id),
    typeorm_1.JoinColumn({ name: "client_Id" }),
    __metadata("design:type", clients_entity_1.Client)
], Tenant.prototype, "clients", void 0);
Tenant = __decorate([
    typeorm_1.Entity('tenants', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], Tenant);
exports.Tenant = Tenant;
//# sourceMappingURL=tenants.entity.js.map