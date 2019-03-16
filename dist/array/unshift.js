"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base = (a, b) => {
    b.unshift(...a);
    return b;
};
const curryUnshift = (a) => (b) => base(a, b);
function unshift(a, b) {
    return [unshift, curryUnshift(a), b && base(a, b)][arguments.length];
}
exports.unshift = unshift;
//# sourceMappingURL=unshift.js.map