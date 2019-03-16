"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = require("../utilities/isFunction");
const curryApply = (mapping) => (obj) => Object.assign({}, ...Object.keys(mapping).map(prop => {
    return isFunction_1.isFunction(mapping[prop]) ? { [prop]: mapping[prop](obj) } : { [prop]: curryApply(mapping[prop])(obj) };
}));
function applySpec(mapping, obj) {
    return [applySpec, curryApply(mapping), obj && curryApply(mapping)(obj)][arguments.length];
}
exports.applySpec = applySpec;
//# sourceMappingURL=applySpec.js.map