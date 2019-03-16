"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryIncludes = (a) => (b) => [...b].indexOf(a) >= 0;
function includes(a, b) {
    return [includes, curryIncludes(a), b && curryIncludes(a)(b)][arguments.length];
}
exports.includes = includes;
//# sourceMappingURL=includes.js.map