"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eq_1 = require("./eq");
exports.isEmpty = (value) => !Boolean(value) || eq_1.eq({})(value) || eq_1.eq([])(value);
//# sourceMappingURL=isEmpty.js.map