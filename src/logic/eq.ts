const curryEq = (a: any) => (b: any) => JSON.stringify(a) === JSON.stringify(b);
/**
 * And two values.
 *
 * @func
 * @sig any -> any -> boolean
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 * @example
 *
 *      v.eq(3, 6);       //=>  false
 *      v.eq('c')('c');      //=> true
 *      v.eq(3)('3');      //=> false
 */
export function eq(a?: any, b?: any) {
    return [eq, curryEq(a), curryEq(a)(b)][arguments.length]
}
