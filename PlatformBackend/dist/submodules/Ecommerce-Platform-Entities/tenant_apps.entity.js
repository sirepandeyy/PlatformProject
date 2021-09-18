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
exports.Tenant_App = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const apps_entity_1 = require("./apps.entity");
const tenants_entity_1 = require("./tenants.entity");
const tenant_app_features_entity_1 = require("./tenant_app_features.entity");
const tenant_user_apps_entity_1 = require("./tenant_user_apps.entity");
let Tenant_App = class Tenant_App extends entitybase_1.EntityBase {
    constructor() {
        super(...arguments);
        this.all_features = false;
    }
};
__decorate([
    typeorm_1.Column({ name: "tenant_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_App.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", nullable: false }),
    __metadata("design:type", Number)
], Tenant_App.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "connection_string", nullable: false }),
    __metadata("design:type", String)
], Tenant_App.prototype, "connection_string", void 0);
__decorate([
    typeorm_1.Column({ name: "all_features", nullable: false }),
    __metadata("design:type", Boolean)
], Tenant_App.prototype, "all_features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => apps_entity_1.App, (App) => App.id),
    typeorm_1.JoinColumn({ name: "app_id" }),
    __metadata("design:type", Array)
], Tenant_App.prototype, "apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenants_entity_1.Tenant, (Tenant) => Tenant.id),
    typeorm_1.JoinColumn({ name: "tenant_id" }),
    __metadata("design:type", Array)
], Tenant_App.prototype, "tenants", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_app_features_entity_1.Tenant_App_Feature, (tenant_app_features) => tenant_app_features.tenant_apps),
    __metadata("design:type", Array)
], Tenant_App.prototype, "tenant_app_features", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_apps_entity_1.Tenant_User_App, (tenant_user_apps) => tenant_user_apps.tenant_apps),
    __metadata("design:type", Array)
], Tenant_App.prototype, "tenant_user_apps", void 0);
Tenant_App = __decorate([
    typeorm_1.Entity('tenant_apps', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], Tenant_App);
exports.Tenant_App = Tenant_App;
//# sourceMappingURL=tenant_apps.entity.js.map