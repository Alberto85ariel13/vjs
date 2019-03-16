"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryGt = (a) => (b) => a > b;
function gt(a, b) {
    return [gt, curryGt(a), a > b][arguments.length];
}
exports.gt = gt;
//# sourceMappingURL=gt.js.map