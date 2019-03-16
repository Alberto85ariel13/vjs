"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryGroup = (prop) => (arr) => {
    const result = {};
    let i = arr.length;
    while (i) {
        i -= 1;
        result[arr[i][prop]] = result[arr[i][prop]] ? result[arr[i][prop]].concat(arr[i]) : [arr[i]];
    }
    return Object.keys(result).sort((a, b) => +(a > b) - +(b > a)).map(r => result[r]);
};
function groupByProp(prop, arr) {
    return [groupByProp, curryGroup(prop), arr && curryGroup(prop)(arr)][arguments.length];
}
exports.groupByProp = groupByProp;
//# sourceMappingURL=groupByProp.js.map