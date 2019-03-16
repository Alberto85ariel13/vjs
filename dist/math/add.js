"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryAdd = (a) => (b) => a + b;
function add(a, b) {
    return [add, curryAdd(a), curryAdd(a)(b)][arguments.length];
}
exports.add = add;
//# sourceMappingURL=add.js.map