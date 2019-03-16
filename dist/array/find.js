"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryFind = (f) => (b) => [...b].find(f);
function find(f, b) {
    return [find, curryFind(f), b && [...b].find(f)][arguments.length];
}
exports.find = find;
//# sourceMappingURL=find.js.map