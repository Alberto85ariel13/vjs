"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryEvery = (f) => (b) => [...b].every(f);
function every(f, b) {
    return [every, curryEvery(f), b && [...b].every(f)][arguments.length];
}
exports.every = every;
//# sourceMappingURL=every.js.map