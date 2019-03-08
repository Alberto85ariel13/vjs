"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryReduceRight = (f, firstValue) => (array) => [...array].reduceRight(f, firstValue);
function reduceRight(f, firstValue, array) {
    return [curryReduceRight(f, firstValue), [...array].reduceRight(f, firstValue)][arguments.length - 2];
}
exports.reduceRight = reduceRight;
//# sourceMappingURL=reduceRight.js.map