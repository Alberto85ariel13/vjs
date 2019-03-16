"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryProp = (prop) => (obj) => obj[prop];
function prop(prop, obj) {
    return [prop, curryProp(prop), obj && curryProp(prop)(obj)][arguments.length];
}
exports.prop = prop;
//# sourceMappingURL=prop.js.map