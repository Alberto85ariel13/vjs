"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = (f1, ...fns) => (...args) => {
    return fns.reduce((res, fn) => fn(res), f1.apply(null, args));
};
//# sourceMappingURL=pipe.js.map