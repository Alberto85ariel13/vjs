"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base = (a, b) => {
    b.push(...a);
    return b;
};
const curryPush = (a) => (b) => base(a, b);
function push(a, b) {
    return [push, curryPush(a), b && base(a, b)][arguments.length];
}
exports.push = push;
//# sourceMappingURL=push.js.map