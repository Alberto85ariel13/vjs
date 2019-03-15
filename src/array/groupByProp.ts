const curryGroup = (prop: string) => (arr: Object[]) => {
    const result = {};
    let i = arr.length;
    while (i) {
        i -= 1;
        result[arr[i][prop]] = result[arr[i][prop]] ? result[arr[i][prop]].concat(arr[i]) : [arr[i]]
    }
    return Object.keys(result).sort((a, b) => +(a > b) - +(b > a)).map(r => result[r]);
}
/**
 * group and sort array object by one prop
 *
 * @func
 * @sig {string} -> {object[]} -> {array[]}
 * @param {string} prop
 * @param {object[]} arr
 * @return {array[]}
 * @example
 *
 *      v.groupByProp('a', [{a: 1,b: 2}, {a: 2,c: 2}, {a: 1,b: 3}, {a: 1,b: 2}]);       //=>  [[{a: 1,b: 2},{a: 1,b: 3},{a: 1,b: 2}],[{a: 2,c: 2}]]
 */
export function groupByProp(prop?: any, arr?: any): any {
    return [groupByProp, curryGroup(prop), arr && curryGroup(prop)(arr)][arguments.length]
}
