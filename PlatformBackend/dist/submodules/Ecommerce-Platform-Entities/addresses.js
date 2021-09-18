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
exports.Address = void 0;
const entitybase_1 = require("./EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const cities_entity_1 = require("./cities.entity");
const states_entity_1 = require("./states.entity");
let Address = class Address extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "street_address" }),
    __metadata("design:type", String)
], Address.prototype, "street_address", void 0);
__decorate([
    typeorm_1.Column({ name: "state_id" }),
    __metadata("design:type", Number)
], Address.prototype, "state_id", void 0);
__decorate([
    typeorm_1.Column({ name: "zip_code" }),
    __metadata("design:type", String)
], Address.prototype, "zip_code", void 0);
__decorate([
    typeorm_1.Column({ name: "address_guid" }),
    __metadata("design:type", String)
], Address.prototype, "address_guid", void 0);
__decorate([
    typeorm_1.Column({ name: "description" }),
    __metadata("design:type", String)
], Address.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: "city_id" }),
    __metadata("design:type", Number)
], Address.prototype, "city_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => states_entity_1.State, (states) => states.id),
    typeorm_1.JoinColumn({ name: "state_id" }),
    __metadata("design:type", states_entity_1.State)
], Address.prototype, "states", void 0);
__decorate([
    typeorm_1.ManyToOne(() => cities_entity_1.City, (cities) => cities.id),
    typeorm_1.JoinColumn({ name: "city_id" }),
    __metadata("design:type", cities_entity_1.City)
], Address.prototype, "cities", void 0);
Address = __decorate([
    typeorm_1.Entity("addresses", { "schema": "framework" }),
    typeorm_1.Unique(['id'])
], Address);
exports.Address = Address;
//# sourceMappingURL=addresses.js.map