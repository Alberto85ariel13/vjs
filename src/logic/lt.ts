const curryLt = (a: number | string) => (b: number | string) => a < b;
/**
 *  a < b.
 *
 * @func
 * @sig {number | string} -> {number | string} -> boolean
 * @param {number | string} a
 * @param {number | string} b
 * @return {boolean}
 * @example
 *
 *      v.lt(3, 6);       //=>  true
 *      v.lt('van')('ll');      //=> false
 */
export function lt(a?: number | string, b?: number | string) {
    return [lt, curryLt(a), a < b][arguments.length]
}
