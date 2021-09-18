"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const page_1 = require("./page");
class Filter {
    // static Conditions: any;
    constructor() {
        this.OrderByField = "";
        this.IsOrderByFieldAsc = false;
        this.Conditions = [];
        this.PageInfo = new page_1.Page;
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map