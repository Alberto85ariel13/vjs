"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryEq = (a) => (b) => JSON.stringify(a) === JSON.stringify(b);
function eq(a, b) {
    return [eq, curryEq(a), curryEq(a)(b)][arguments.length];
}
exports.eq = eq;
//# sourceMappingURL=eq.js.map