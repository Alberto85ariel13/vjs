"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryFindIndex = (f) => (b) => [...b].findIndex(f);
function findIndex(f, b) {
    return [findIndex, curryFindIndex(f), b && [...b].findIndex(f)][arguments.length];
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map