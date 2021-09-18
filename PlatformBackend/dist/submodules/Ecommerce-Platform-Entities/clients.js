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
exports.Client = void 0;
const tenants_1 = require("./tenants");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
let Client = class Client extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "address_id" }),
    __metadata("design:type", Number)
], Client.prototype, "address_id", void 0);
__decorate([
    typeorm_1.Column({ name: "start_date", }),
    __metadata("design:type", Date)
], Client.prototype, "start_date", void 0);
__decorate([
    typeorm_1.Column({ name: "Expiry_date", }),
    __metadata("design:type", Date)
], Client.prototype, "expiry_date", void 0);
__decorate([
    typeorm_1.Column({ name: "client_key", }),
    __metadata("design:type", String)
], Client.prototype, "client_key", void 0);
__decorate([
    typeorm_1.Column({ name: "client_name", }),
    __metadata("design:type", String)
], Client.prototype, "client_name", void 0);
__decorate([
    typeorm_1.Column({ name: "description", }),
    __metadata("design:type", String)
], Client.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: "contact_id", }),
    __metadata("design:type", Number)
], Client.prototype, "contact_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenants_1.Tenant, Tenants => Tenants.clients),
    __metadata("design:type", Array)
], Client.prototype, "tenants", void 0);
Client = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Client);
exports.Client = Client;
//# sourceMappingURL=clients.js.map