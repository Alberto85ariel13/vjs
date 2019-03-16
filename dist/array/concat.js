"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryConcat = (a) => (b) => b.concat(a);
function concat(a, b) {
    return [concat, curryConcat(a), b && b.concat(a)][arguments.length];
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map