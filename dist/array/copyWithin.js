"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry1CopyWithin = (start, end, target) => (array) => [...array].copyWithin(target, start, end);
const curry2CopyWithin = (start, end) => (target) => (array) => [...array].copyWithin(target, start, end);
function copyWithin(start, end, target, array) {
    return [
        curry2CopyWithin(start, end),
        curry1CopyWithin(start, end, target),
        [...array].copyWithin(target, start, end)
    ][arguments.length - 2];
}
exports.copyWithin = copyWithin;
//# sourceMappingURL=copyWithin.js.map