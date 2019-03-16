"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty_1 = require("./../utilities/isEmpty");
exports.omitEmpty = (obj) => Object.assign({}, ...(Object.keys(obj).filter(key => !isEmpty_1.isEmpty(obj[key]))).map(prop => ({
    [prop]: obj[prop]
})));
//# sourceMappingURL=omitEmpty.js.map