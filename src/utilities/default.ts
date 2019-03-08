const curryDefault = (a: any) => (b: any) => b === false || b === 0 || b === '' || Boolean(b) ? b : a;
/**
 * if b is undefined return a.
 *
 * @func
 * @sig boolean -> boolean -> boolean
 * @param {boolean} a
 * @param {boolean} b
 * @return {boolean}
 * @example
 *
 *      v.default(3, false);       //=>  false
 *      v.default(3)(null);      //=> 3
 *      v.default(3)(undefined);      //=> 3
 *      v.default(3)(0);      //=> 0
 */
export function and(a?: any, b?: any) {
    return [and, curryDefault(a), curryDefault(a)(b)][arguments.length]
}
