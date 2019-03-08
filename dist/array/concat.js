"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryConcat = (a) => (b) => a.concat(b);
function concat(a, b) {
    return [concat, curryConcat(a), a.concat(b)][arguments.length];
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map