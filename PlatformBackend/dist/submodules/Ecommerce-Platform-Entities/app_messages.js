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
exports.App_Message = void 0;
const apps_1 = require("./apps");
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
let App_Message = class App_Message extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "user_id", }),
    __metadata("design:type", Number)
], App_Message.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_id", }),
    __metadata("design:type", Number)
], App_Message.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => apps_1.App, (apps) => apps.app_message),
    __metadata("design:type", Array)
], App_Message.prototype, "apps", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", }),
    __metadata("design:type", Number)
], App_Message.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "is_notification", }),
    __metadata("design:type", Boolean)
], App_Message.prototype, "is_notification", void 0);
__decorate([
    typeorm_1.Column({ name: "subject", }),
    __metadata("design:type", String)
], App_Message.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column({ name: "message_body", }),
    __metadata("design:type", String)
], App_Message.prototype, "message_body", void 0);
__decorate([
    typeorm_1.Column({ name: "is_read", }),
    __metadata("design:type", Boolean)
], App_Message.prototype, "is_read", void 0);
App_Message = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['Id'])
], App_Message);
exports.App_Message = App_Message;
//# sourceMappingURL=app_messages.js.map