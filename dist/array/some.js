"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currySome = (f) => (b) => [...b].some(f);
function some(f, b) {
    return [some, currySome(f), b && [...b].some(f)][arguments.length];
}
exports.some = some;
//# sourceMappingURL=some.js.map