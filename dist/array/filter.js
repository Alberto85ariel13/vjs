"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryFilter = (f) => (b) => [...b].filter(f);
function filter(f, b) {
    return [filter, curryFilter(f), b && [...b].filter(f)][arguments.length];
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map