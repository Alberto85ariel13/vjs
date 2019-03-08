/**
 * Returns last element array.
 *
 * @func
 * @sig {T[] | string} -> {T[] | char}
 * @param arr
 * @return T[] | char
 * @example
 *
 *      v.pop('abc'); //=> c
 *      v.pop(['a','b','c']); //=> c
 */
export function pop(arr?: any) {
    return [...arr].pop();
};
