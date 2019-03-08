/**
 * Returns first element array.
 *
 * @func
 * @sig {T[] | string} -> {T[] | char}
 * @param arr
 * @return T[] | char
 * @example
 *
 *      v.shift('abc'); //=> c
 *      v.shift(['a','b','c']); //=> c
 */
export function shift(arr?: any) {
    return [...arr].shift();
};
