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
const apps_1 = require("./apps");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const feature_permissions_1 = require("./feature_permissions");
let Feature = class Feature extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "feature_id", }),
    __metadata("design:type", Number)
], Feature.prototype, "feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_name", }),
    __metadata("design:type", String)
], Feature.prototype, "feature_name", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", }),
    __metadata("design:type", Number)
], Feature.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "base_feature_id", }),
    __metadata("design:type", Number)
], Feature.prototype, "base_feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_description", }),
    __metadata("design:type", String)
], Feature.prototype, "feature_description", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_key", }),
    __metadata("design:type", String)
], Feature.prototype, "feature_key", void 0);
__decorate([
    typeorm_1.Column({ name: "operations", }),
    __metadata("design:type", String)
], Feature.prototype, "operations", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_type", }),
    __metadata("design:type", Number)
], Feature.prototype, "feature_type", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => apps_1.App, (apps) => apps.features),
    __metadata("design:type", Array)
], Feature.prototype, "apps", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissions_1.Feature_Permission, (feature_permissions) => feature_permissions.feature_id),
    __metadata("design:type", Array)
], Feature.prototype, "feature_permissions", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissions_1.Feature_Permission, (tenant_app_feature) => tenant_app_feature.feature_id),
    __metadata("design:type", Array)
], Feature.prototype, "tenant_app_features", void 0);
Feature = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Feature);
exports.Feature = Feature;
//# sourceMappingURL=features.js.map