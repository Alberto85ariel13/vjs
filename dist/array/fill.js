"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry1Fill = (start, end, value) => (array) => [...array].fill(value, start, end);
const curry2Fill = (start, end) => (value) => (array) => [...array].fill(value, start, end);
function fill(start, end, value, array) {
    return [
        curry2Fill(start, end),
        curry1Fill(start, end, value),
        [...array].fill(value, start, end)
    ][arguments.length - 2];
}
exports.fill = fill;
//# sourceMappingURL=fill.js.map