"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryOmit = (props) => (obj) => Object.assign({}, ...(Object.keys(obj).filter(key => !props.includes(key))).map(prop => ({
    [prop]: obj[prop]
})));
function omit(props, obj) {
    return [omit, curryOmit(props), obj && curryOmit(props)(obj)][arguments.length];
}
exports.omit = omit;
//# sourceMappingURL=omit.js.map