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
exports.Feature_Permission = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const features_entity_1 = require("./features.entity");
const roles_entity_1 = require("./roles.entity");
const users_entity_1 = require("./users.entity");
let Feature_Permission = class Feature_Permission extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "feature_id", nullable: false }),
    __metadata("design:type", Number)
], Feature_Permission.prototype, "feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "operation_permitted", type: "json", nullable: false }),
    __metadata("design:type", Object)
], Feature_Permission.prototype, "operation_permitted", void 0);
__decorate([
    typeorm_1.Column({ name: "role_id", nullable: false }),
    __metadata("design:type", Number)
], Feature_Permission.prototype, "role_id", void 0);
__decorate([
    typeorm_1.Column({ name: "user_id", nullable: false }),
    __metadata("design:type", Number)
], Feature_Permission.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "role_feature_security", type: "json", nullable: false }),
    __metadata("design:type", Object)
], Feature_Permission.prototype, "role_feature_security", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => features_entity_1.Feature, (features) => features.id),
    typeorm_1.JoinColumn({ name: "feature_id" }),
    __metadata("design:type", Array)
], Feature_Permission.prototype, "features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => roles_entity_1.Role, (roles) => roles.id),
    typeorm_1.JoinColumn({ name: "role_id" }),
    __metadata("design:type", Array)
], Feature_Permission.prototype, "roles", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => users_entity_1.User, (users) => users.id),
    typeorm_1.JoinColumn({ name: "user_id" }),
    __metadata("design:type", Array)
], Feature_Permission.prototype, "users", void 0);
Feature_Permission = __decorate([
    typeorm_1.Entity('feature_permissions', { "schema": "platform" })
], Feature_Permission);
exports.Feature_Permission = Feature_Permission;
//# sourceMappingURL=feature_permissions.entity.js.map