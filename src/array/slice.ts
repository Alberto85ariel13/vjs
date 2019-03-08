const currySlice = (start: number, end: number) => (arr: any) => arr.slice(start || 0, end || arr.length);
/**
 * slice from start to (end || length).
 *
 * @func
 * @sig {number} -> {number} -> {array | string} -> {array | string}
 * @param {number} start
 * @param {number} end
 * @param {array | string} arr
 * @return {array | string}
 * @example
 *
 *      v.slice(1, 3,[1,2,3,4]);       //=>  [2,3]
 *      v.slice(1, 0)([1,2,3,4]);      //=> [2,3,4]
 */
export function slice(start: number, end: number, arr?: any) {
    return [currySlice(start, end), arr.slice(start || 0, end || arr.length)][arguments.length - 2]
}
