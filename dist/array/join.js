"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryJoin = (separator) => (b) => [...b].join(separator);
function join(separator, b) {
    return [join, curryJoin(separator), b && [...b].join(separator)][arguments.length];
}
exports.join = join;
//# sourceMappingURL=join.js.map