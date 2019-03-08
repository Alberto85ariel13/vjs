"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryMap = (f) => (b) => [...b].map(f);
function map(f, b) {
    return [map, curryMap(f), [...b].map(f)][arguments.length];
}
exports.map = map;
//# sourceMappingURL=map.js.map