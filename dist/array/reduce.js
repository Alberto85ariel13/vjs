"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryReduce = (f, firstValue) => (array) => [...array].reduce(f, firstValue);
function reduce(f, firstValue, array) {
    return [curryReduce(f, firstValue), array && [...array].reduce(f, firstValue)][arguments.length - 2];
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map