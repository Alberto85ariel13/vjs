"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const omitNull_1 = require("./omitNull");
const curryAssign = (obj1, obj2) => Object.assign(obj2, omitNull_1.omitNull(obj1));
exports.assignAllLeft = (array) => array.reduce(curryAssign, {});
//# sourceMappingURL=assignAllLeft.js.map