"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryIncludes = (a) => (b) => b.includes(a);
function includes(a, b) {
    return [includes, curryIncludes(a), b.includes(a)][arguments.length];
}
exports.includes = includes;
//# sourceMappingURL=includes.js.map