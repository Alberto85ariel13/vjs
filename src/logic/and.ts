const curryAnd = (a: boolean) => (b: boolean) => a && b;
/**
 * And two values.
 *
 * @func
 * @sig boolean -> boolean -> boolean
 * @param {boolean} a
 * @param {boolean} b
 * @return {boolean}
 * @example
 *
 *      v.and(true, false);       //=>  false
 *      v.and(true)(true);      //=> true
 *      v.and(false)(false);      //=> false
 */
export function and(a?: boolean, b?: boolean) {
    return [and, curryAnd(a), a && b][arguments.length]
}
