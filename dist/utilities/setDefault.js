"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryDefault = (a) => (b) => b === false || b === 0 || b === '' ? b : b || a;
function setDefault(a, b) {
    return [setDefault, curryDefault(a), curryDefault(a)(b)][arguments.length];
}
exports.setDefault = setDefault;
//# sourceMappingURL=setDefault.js.map