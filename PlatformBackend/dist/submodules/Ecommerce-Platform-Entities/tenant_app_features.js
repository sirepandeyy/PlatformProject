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
exports.Tenant_App_Feature = void 0;
const features_1 = require("./features");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
let Tenant_App_Feature = class Tenant_App_Feature extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_app_id", }),
    __metadata("design:type", Number)
], Tenant_App_Feature.prototype, "tenant_app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_id", }),
    __metadata("design:type", Number)
], Tenant_App_Feature.prototype, "feature_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => features_1.Feature, (features) => features.tenant_app_features),
    __metadata("design:type", Array)
], Tenant_App_Feature.prototype, "features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => features_1.Feature, (tenant_apps) => tenant_apps.tenant_app_features),
    __metadata("design:type", Array)
], Tenant_App_Feature.prototype, "tenant_apps", void 0);
Tenant_App_Feature = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_App_Feature);
exports.Tenant_App_Feature = Tenant_App_Feature;
//# sourceMappingURL=tenant_app_features.js.map