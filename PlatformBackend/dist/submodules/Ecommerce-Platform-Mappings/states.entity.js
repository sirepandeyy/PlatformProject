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
exports.State = void 0;
const entitybase_1 = require("./../Ecommerce-Platform-Entities/EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const cities_entity_1 = require("./cities.entity");
const countries_entity_1 = require("./countries.entity");
const addresses_entity_1 = require("./addresses.entity");
let State = class State extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "state_name", nullable: false }),
    __metadata("design:type", String)
], State.prototype, "state_name", void 0);
__decorate([
    typeorm_1.Column({ name: "state_code", nullable: false }),
    __metadata("design:type", String)
], State.prototype, "state_code", void 0);
__decorate([
    typeorm_1.Column({ name: "state_tel_code", nullable: false }),
    __metadata("design:type", Number)
], State.prototype, "state_tel_code", void 0);
__decorate([
    typeorm_1.Column({ name: "country_id", nullable: false }),
    __metadata("design:type", Number)
], State.prototype, "country_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => countries_entity_1.Country, (countries) => countries.states),
    typeorm_1.JoinColumn({ name: "country_id" }),
    __metadata("design:type", countries_entity_1.Country)
], State.prototype, "countries", void 0);
__decorate([
    typeorm_1.OneToMany(() => cities_entity_1.City, (cities) => cities.states),
    __metadata("design:type", Array)
], State.prototype, "cities", void 0);
__decorate([
    typeorm_1.OneToMany(() => addresses_entity_1.Address, (addresses) => addresses.cities),
    __metadata("design:type", Array)
], State.prototype, "addresses", void 0);
State = __decorate([
    typeorm_1.Entity("states", { "schema": "framework" }),
    typeorm_1.Unique(['Id'])
], State);
exports.State = State;
//# sourceMappingURL=states.entity.js.map