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
const apps_1 = require("./apps");
const tenants_1 = require("./tenants");
const tenant_user_apps_1 = require("./tenant_user_apps");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenant_app_features_1 = require("./tenant_app_features");
let Tenant_App = class Tenant_App extends entitybase_1.EntityBase {
    constructor() {
        super(...arguments);
        this.all_features = false;
    }
};
__decorate([
    typeorm_1.Column({ name: "tenant_id", }),
    __metadata("design:type", Number)
], Tenant_App.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", }),
    __metadata("design:type", Number)
], Tenant_App.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "connection_string", }),
    __metadata("design:type", String)
], Tenant_App.prototype, "connection_string", void 0);
__decorate([
    typeorm_1.Column({ name: "all_features", }),
    __metadata("design:type", Boolean)
], Tenant_App.prototype, "all_features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => apps_1.App, (apps) => apps.tenant_apps),
    __metadata("design:type", Array)
], Tenant_App.prototype, "apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenants_1.Tenant, (tenants) => tenants.tenant_apps),
    __metadata("design:type", Array)
], Tenant_App.prototype, "tenants", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_app_features_1.Tenant_App_Feature, (tenant_app_features) => tenant_app_features.tenant_app_id),
    __metadata("design:type", Array)
], Tenant_App.prototype, "tenant_app_features", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_apps_1.Tenant_User_App, (tenant_user_apps) => tenant_user_apps.tenant_app_id),
    __metadata("design:type", Array)
], Tenant_App.prototype, "tenant_user_apps", void 0);
Tenant_App = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_App);
exports.Tenant_App = Tenant_App;
//# sourceMappingURL=tenant_apps.js.map