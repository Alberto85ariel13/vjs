"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryForEach = (f) => (b) => [...b].forEach(f);
function forEach(f, b) {
    return [forEach, curryForEach(f), b && [...b].forEach(f)][arguments.length];
}
exports.forEach = forEach;
//# sourceMappingURL=forEach.js.map