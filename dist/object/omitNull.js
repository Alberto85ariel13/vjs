"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNull_1 = require("../utilities/isNull");
exports.omitNull = (obj) => Object.assign({}, ...(Object.keys(obj).filter(key => !isNull_1.isNull(obj[key]))).map(prop => ({
    [prop]: obj[prop]
})));
//# sourceMappingURL=omitNull.js.map