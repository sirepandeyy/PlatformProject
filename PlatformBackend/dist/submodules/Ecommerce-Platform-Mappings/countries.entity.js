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
exports.Country = void 0;
const entitybase_1 = require("./../Ecommerce-Platform-Entities/EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const states_entity_1 = require("../Ecommerce-Platform-Entities/states.entity");
let Country = class Country extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "country_name", nullable: false }),
    __metadata("design:type", String)
], Country.prototype, "country_name", void 0);
__decorate([
    typeorm_1.Column({ name: "country_code", nullable: false }),
    __metadata("design:type", String)
], Country.prototype, "country_code", void 0);
__decorate([
    typeorm_1.Column({ name: "country_tel_code", nullable: false }),
    __metadata("design:type", String)
], Country.prototype, "country_tel_code", void 0);
__decorate([
    typeorm_1.Column({ name: "currency", nullable: false }),
    __metadata("design:type", String)
], Country.prototype, "currency", void 0);
__decorate([
    typeorm_1.OneToMany(() => states_entity_1.State, (states) => states.countries),
    __metadata("design:type", Array)
], Country.prototype, "states", void 0);
Country = __decorate([
    typeorm_1.Entity("countries", { "schema": "framework" }),
    typeorm_1.Unique(['Id'])
], Country);
exports.Country = Country;
//# sourceMappingURL=countries.entity.js.map