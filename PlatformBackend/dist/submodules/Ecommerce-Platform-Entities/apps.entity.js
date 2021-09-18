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
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const app_messages_entity_1 = require("./app_messages.entity");
const app_roles_entity_1 = require("./app_roles.entity");
const features_entity_1 = require("./features.entity");
const tenant_apps_entity_1 = require("./tenant_apps.entity");
let App = class App extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "app_name", nullable: false }),
    __metadata("design:type", String)
], App.prototype, "app_name", void 0);
__decorate([
    typeorm_1.Column({ name: "app_description", nullable: true }),
    __metadata("design:type", String)
], App.prototype, "app_description", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_messages_entity_1.App_Message, (app_message) => app_message.apps),
    __metadata("design:type", Array)
], App.prototype, "app_message", void 0);
__decorate([
    typeorm_1.OneToMany((type) => features_entity_1.Feature, (features) => features.apps),
    __metadata("design:type", Array)
], App.prototype, "features", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_roles_entity_1.App_Role, (app_roles) => app_roles.apps),
    __metadata("design:type", Array)
], App.prototype, "app_roles", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_apps_entity_1.Tenant_App, (tenant_apps) => tenant_apps.apps),
    __metadata("design:type", Array)
], App.prototype, "tenant_apps", void 0);
App = __decorate([
    typeorm_1.Entity('apps', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], App);
exports.App = App;
//# sourceMappingURL=apps.entity.js.map