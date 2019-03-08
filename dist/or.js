"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryOr = (a) => (b) => a || b;
function or(a, b) {
    return [or, curryOr(a), a || b][arguments.length];
}
exports.or = or;
//# sourceMappingURL=or.js.map