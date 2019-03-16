"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryLt = (a) => (b) => a < b;
function lt(a, b) {
    return [lt, curryLt(a), a < b][arguments.length];
}
exports.lt = lt;
//# sourceMappingURL=lt.js.map