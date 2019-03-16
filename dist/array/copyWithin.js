"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryCopyWithin = (start, end) => (target) => (array) => [...array].copyWithin(target, start, end);
function copyWithin(start, end, target, array) {
    return [
        curryCopyWithin(start, end),
        curryCopyWithin(start, end)(target),
        array && curryCopyWithin(start, end)(target)(array)
    ][arguments.length - 2];
}
exports.copyWithin = copyWithin;
//# sourceMappingURL=copyWithin.js.map