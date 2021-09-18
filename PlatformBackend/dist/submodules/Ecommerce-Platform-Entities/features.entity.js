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
exports.Feature = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const apps_entity_1 = require("./apps.entity");
const feature_permissions_entity_1 = require("./feature_permissions.entity");
let Feature = class Feature extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "feature_name", nullable: false }),
    __metadata("design:type", String)
], Feature.prototype, "feature_name", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", nullable: false }),
    __metadata("design:type", Number)
], Feature.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "base_feature_id", nullable: false }),
    __metadata("design:type", Number)
], Feature.prototype, "base_feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_description", nullable: false }),
    __metadata("design:type", String)
], Feature.prototype, "feature_description", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_key", nullable: false }),
    __metadata("design:type", String)
], Feature.prototype, "feature_key", void 0);
__decorate([
    typeorm_1.Column("text", { name: "operations", nullable: true, array: true }),
    __metadata("design:type", Array)
], Feature.prototype, "operations", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_type", nullable: false }),
    __metadata("design:type", Number)
], Feature.prototype, "feature_type", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => apps_entity_1.App, (apps) => apps.id),
    typeorm_1.JoinColumn({ name: "app_id" }),
    __metadata("design:type", Array)
], Feature.prototype, "apps", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissions_entity_1.Feature_Permission, (feature_permissions) => feature_permissions.features),
    __metadata("design:type", Array)
], Feature.prototype, "feature_permissions", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissions_entity_1.Feature_Permission, (tenant_app_feature) => tenant_app_feature.features),
    __metadata("design:type", Array)
], Feature.prototype, "tenant_app_features", void 0);
Feature = __decorate([
    typeorm_1.Entity('features', { "schema": "platform" }),
    typeorm_1.Unique(["id"])
], Feature);
exports.Feature = Feature;
//# sourceMappingURL=features.entity.js.map