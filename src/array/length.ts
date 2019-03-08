/**
 * Returns length array or string.
 *
 * @func
 * @sig {array | string} -> {number}
 * @param arr
 * @return length
 * @example
 *
 *      v.length('abc'); //=> 3
 */
export function length(arr?: any) {
    return [...arr].length;
};
