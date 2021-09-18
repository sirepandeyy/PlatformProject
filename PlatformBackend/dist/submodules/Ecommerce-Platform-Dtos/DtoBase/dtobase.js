"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoBase = void 0;
class DtoBase {
    constructor() {
        this.row_version = 0;
        this.creation_date = new Date();
        this.modified_date = new Date();
    }
}
exports.DtoBase = DtoBase;
//# sourceMappingURL=dtobase.js.map