"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currySort = (comparator) => (b) => [...b].sort(comparator);
function sort(comparator, b) {
    return [sort, currySort(comparator), [...b].sort(comparator)][arguments.length];
}
exports.sort = sort;
//# sourceMappingURL=sort.js.map