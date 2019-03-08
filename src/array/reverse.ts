/**
 * Returns reverse array.
 *
 * @func
 * @sig {array | string} -> {array | string}
 * @param arr
 * @return array
 * @example
 *
 *      v.reverse('abc'); //=> ['c','b','a']
 *      v.reverse([1,2,3]); //=> [3,2,1]
 */
export function reverse(arr?: any) {
    return [...arr].reverse();
};
