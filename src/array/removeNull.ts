/**
 * Return array removed null or undefined.
 *
 * @func
 * @sig {array | string} -> {array | string}
 * @param arr
 * @return array
 * @example
 *
 *      v.removeNull(['', 0, 1, 'dd', null, undefined, NaN, {},[]]); //=> [ '', 0, 1, 'dd', {}, [] ]
 */
export const removeNull = (arr?: any) => arr.filter(val => val === 0 || val === '' || Boolean(val))

