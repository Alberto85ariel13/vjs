"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("../utilities/compose");
const filter_1 = require("./filter");
const eq_1 = require("../utilities/eq");
const not_1 = require("../utilities/not");
exports.removeEmpty = compose_1.compose(filter_1.filter(compose_1.compose(not_1.not, eq_1.eq([]))), filter_1.filter(compose_1.compose(not_1.not, eq_1.eq({}))), filter_1.filter(Boolean));
//# sourceMappingURL=removeEmpty.js.map