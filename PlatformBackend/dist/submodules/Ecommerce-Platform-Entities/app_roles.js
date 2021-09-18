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
exports.App_Role = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const apps_1 = require("./apps");
const roles_1 = require("./roles");
let App_Role = class App_Role extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "role_id", }),
    __metadata("design:type", Number)
], App_Role.prototype, "role_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", }),
    __metadata("design:type", Number)
], App_Role.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_role_permisssions", }),
    __metadata("design:type", String)
], App_Role.prototype, "app_role_permissions", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => apps_1.App, (apps) => apps.app_roles),
    __metadata("design:type", Array)
], App_Role.prototype, "apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => roles_1.Role, (roles) => roles.app_roles),
    __metadata("design:type", Array)
], App_Role.prototype, "roles", void 0);
App_Role = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], App_Role);
exports.App_Role = App_Role;
//# sourceMappingURL=app_roles.js.map