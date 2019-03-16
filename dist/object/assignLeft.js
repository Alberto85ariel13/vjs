"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const omitNull_1 = require("./omitNull");
const curryAssign = (obj1) => (obj2) => Object.assign(obj2, omitNull_1.omitNull(obj1));
function assignLeft(obj1, obj2) {
    return [assignLeft, curryAssign(obj1), obj2 && curryAssign(obj1)(obj2)][arguments.length];
}
exports.assignLeft = assignLeft;
//# sourceMappingURL=assignLeft.js.map