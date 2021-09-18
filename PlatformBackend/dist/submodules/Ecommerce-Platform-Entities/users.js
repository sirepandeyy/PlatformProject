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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const feature_permissions_entity_1 = require("./feature_permissions.entity");
const tenant_users_entity_1 = require("./tenant_users.entity");
let User = class User extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "login_name" }),
    __metadata("design:type", String)
], User.prototype, "login_name", void 0);
__decorate([
    typeorm_1.Column({ name: "birth_date" }),
    __metadata("design:type", Date)
], User.prototype, "birth_date", void 0);
__decorate([
    typeorm_1.Column({ name: "date_of_joining" }),
    __metadata("design:type", Date)
], User.prototype, "date_of_joining", void 0);
__decorate([
    typeorm_1.Column({ name: "first_name" }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column({ name: "last_name" }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column({ name: "email" }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: "phone" }),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ name: "marital_status" }),
    __metadata("design:type", String)
], User.prototype, "marital_status", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_users_entity_1.Tenant_User, (tenant_users) => tenant_users.users),
    __metadata("design:type", Array)
], User.prototype, "tenant_users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissions_entity_1.Feature_Permission, (feature_permissions) => feature_permissions.users),
    __metadata("design:type", Array)
], User.prototype, "feature_permissions", void 0);
User = __decorate([
    typeorm_1.Entity('users'),
    typeorm_1.Unique(["Id"])
], User);
exports.User = User;
//# sourceMappingURL=users.js.map