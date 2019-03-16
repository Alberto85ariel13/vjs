"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flat(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val), []);
}
exports.flat = flat;
//# sourceMappingURL=flat.js.map