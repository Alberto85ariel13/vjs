"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryFill = (start, end) => (value) => (array) => [...array].fill(value, start, end);
function fill(start, end, value, array) {
    return [
        curryFill(start, end),
        curryFill(start, end)(value),
        array && [...array].fill(value, start, end)
    ][arguments.length - 2];
}
exports.fill = fill;
//# sourceMappingURL=fill.js.map