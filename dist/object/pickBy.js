"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryPickBy = (f) => (obj) => Object.assign({}, ...(Object.keys(obj).filter(key => f(obj[key]))).map(prop => ({
    [prop]: obj[prop]
})));
function pickBy(f, obj) {
    return [pickBy, curryPickBy(f), obj && curryPickBy(f)(obj)][arguments.length];
}
exports.pickBy = pickBy;
//# sourceMappingURL=pickBy.js.map