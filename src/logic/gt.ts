const curryGt = (a: number | string) => (b: number | string) => a > b;
/**
 *  a > b.
 *
 * @func
 * @sig {number | string} -> {number | string} -> boolean
 * @param {number | string} a
 * @param {number | string} b
 * @return {boolean}
 * @example
 *
 *      v.gt(3, 6);       //=>  false
 *      v.gt('van')('ll');      //=> true
 */
export function gt(a?: number | string, b?: number | string) {
    return [gt, curryGt(a), a > b][arguments.length]
}
