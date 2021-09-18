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
exports.App = void 0;
const tenant_apps_1 = require("./tenant_apps");
const features_1 = require("./features");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const app_roles_1 = require("./app_roles");
const app_messages_1 = require("./app_messages");
let App = class App extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "app_name", }),
    __metadata("design:type", String)
], App.prototype, "app_name", void 0);
__decorate([
    typeorm_1.Column({ name: "app_description", }),
    __metadata("design:type", String)
], App.prototype, "app_description", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_messages_1.App_Message, (app_message) => app_message.app_id),
    __metadata("design:type", Array)
], App.prototype, "app_message", void 0);
__decorate([
    typeorm_1.OneToMany((type) => features_1.Feature, (features) => features.app_id),
    __metadata("design:type", Array)
], App.prototype, "features", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_roles_1.App_Role, (app_roles) => app_roles.app_id),
    __metadata("design:type", Array)
], App.prototype, "app_roles", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_apps_1.Tenant_App, (tenant_apps) => tenant_apps.app_id),
    __metadata("design:type", Array)
], App.prototype, "tenant_apps", void 0);
App = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], App);
exports.App = App;
//# sourceMappingURL=apps.js.map