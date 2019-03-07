const curryOr = (a: boolean) => (b: boolean) => a || b;
/**
 * Or two values.
 *
 * @func
 * @sig boolean -> boolean -> boolean
 * @param {boolean} a
 * @param {boolean} b
 * @return {boolean}
 * @example
 *
 *      v.or(true, false);       //=>  true
 *      v.or(true)(true);      //=> true
 *      v.or(false)(false);      //=> false
 */
export function or(a: boolean, b: boolean) {
    return [or, curryOr(a), a || b][arguments.length]
}
