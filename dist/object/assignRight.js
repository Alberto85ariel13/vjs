"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const omitNull_1 = require("./omitNull");
const curryAssign = (obj1) => (obj2) => Object.assign(obj1, omitNull_1.omitNull(obj2));
function assignRight(obj1, obj2) {
    return [assignRight, curryAssign(obj1), obj2 && curryAssign(obj1)(obj2)][arguments.length];
}
exports.assignRight = assignRight;
//# sourceMappingURL=assignRight.js.map