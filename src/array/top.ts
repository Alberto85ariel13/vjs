/**
 * Returns last element array.
 *
 * @func
 * @sig {T[] | string} -> {T[] | char}
 * @param arr
 * @return T[] | char
 * @example
 *
 *      v.top('abc'); //=> c
 *      v.top(['a','b','c']); //=> c
 */
export function top(arr?: any) {
    return [...arr].pop();
};
