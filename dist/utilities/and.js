"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryAnd = (a) => (b) => a && b;
function and(a, b) {
    return [and, curryAnd(a), a && b][arguments.length];
}
exports.and = and;
//# sourceMappingURL=and.js.map