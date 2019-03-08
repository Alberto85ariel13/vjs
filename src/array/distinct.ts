/**
 * Returns new array of distinct original array.
 *
 * @func
 * @sig {array} -> {array}
 * @param arr
 * @return length
 * @example
 *
 *      v.distinct([1,2,3,1,2,6]); //=> [1,2,3,6]
 */
export function distinct(arr?: any) {
    return [...new Set([...arr])];
};
