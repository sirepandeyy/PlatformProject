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
exports.City = void 0;
const entitybase_1 = require("./../Ecommerce-Platform-Entities/EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const addresses_entity_1 = require("./addresses.entity");
const states_entity_1 = require("./states.entity");
let City = class City extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "state_id", nullable: false }),
    __metadata("design:type", Number)
], City.prototype, "state_id", void 0);
__decorate([
    typeorm_1.Column({ name: "city_name", nullable: false }),
    __metadata("design:type", String)
], City.prototype, "city_name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => states_entity_1.State, (states) => states.cities),
    typeorm_1.JoinColumn({ name: "state_id" }),
    __metadata("design:type", states_entity_1.State)
], City.prototype, "states", void 0);
__decorate([
    typeorm_1.OneToMany(() => addresses_entity_1.Address, (addresses) => addresses.cities),
    __metadata("design:type", Array)
], City.prototype, "addresses", void 0);
City = __decorate([
    typeorm_1.Entity("cities", { "schema": "framework" }),
    typeorm_1.Unique(['Id'])
], City);
exports.City = City;
//# sourceMappingURL=cities.entity.js.map