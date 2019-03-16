"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryPick = (props) => (obj) => Object.assign({}, ...props.map(prop => ({
    [prop]: obj[prop]
})));
function pick(props, obj) {
    return [pick, curryPick(props), obj && curryPick(props)(obj)][arguments.length];
}
exports.pick = pick;
//# sourceMappingURL=pick.js.map