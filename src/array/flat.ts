/**
 * Returns flatten array.
 *
 * @func
 * @sig {array} -> {array}
 * @param arr
 * @return array
 * @example
 *
 *      v.flat([4, 8, [3, [4, 4]], undefined, [6]]); //=> [ 4, 8, 3, 4, 4, undefined, 6 ]
 */
export function flat(arr?:any[]) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val), []);
}
