"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
class Condition {
    Condition(filedName, fieldValue, operatorSymbol, conditionalSymbol, isCaseInSensitiveSearch = false) {
        this.FieldName = filedName;
        this.FieldValue = fieldValue;
        this.OperatorSymbol = operatorSymbol;
        this.ConditionalSymbol = conditionalSymbol;
        this.IsCaseInSensitiveSearch = isCaseInSensitiveSearch;
    }
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map