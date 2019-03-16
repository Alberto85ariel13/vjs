"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const omitNull_1 = require("./omitNull");
const curryAssign = (obj1, obj2) => Object.assign(obj1, omitNull_1.omitNull(obj2));
exports.assignAllRight = (array) => array.reduceRight(curryAssign, {});
//# sourceMappingURL=assignAllRight.js.map