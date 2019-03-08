"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currySlice = (start, end) => (arr) => arr.slice(start || 0, end || arr.length);
function slice(start, end, arr) {
    return [currySlice(start, end), arr.slice(start || 0, end || arr.length)][arguments.length - 2];
}
exports.slice = slice;
//# sourceMappingURL=slice.js.map