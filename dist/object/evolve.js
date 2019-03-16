"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryEvolve = (applyObj) => (obj) => Object.assign(obj, ...Object.keys(applyObj).map(prop => ({
    [prop]: applyObj[prop](obj[prop])
})));
function evolve(applyObj, obj) {
    return [evolve, curryEvolve(applyObj), obj && curryEvolve(applyObj)(obj)][arguments.length];
}
exports.evolve = evolve;
//# sourceMappingURL=evolve.js.map