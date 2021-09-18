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
exports.UsersFacade = void 0;
const common_1 = require("@nestjs/common");
const users_appservice_1 = require("../appservices/users.appservice");
const facadebase_1 = require("./facadebase");
const users_entity_1 = require("../../submodules/Ecommerce-Platform-Entities/users.entity");
let UsersFacade = class UsersFacade extends facadebase_1.default {
    constructor(usersAppService) {
        super(usersAppService);
        this.usersAppService = usersAppService;
    }
};
UsersFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_appservice_1.default])
], UsersFacade);
exports.UsersFacade = UsersFacade;
//# sourceMappingURL=users.facade.js.map