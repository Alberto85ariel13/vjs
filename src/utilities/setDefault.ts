const curryDefault = (a: any) => (b: any) => b === false || b === 0 || b === '' ? b : b || a;
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
 *      v.setDefault(3, false);       //=>  false
 *      v.setDefault(3)(null);      //=> 3
 *      v.setDefault(3)(undefined);      //=> 3
 *      v.setDefault(3)(0);      //=> 0
 */
export function setDefault(a?: any, b?: any) {
    return [setDefault, curryDefault(a), curryDefault(a)(b)][arguments.length]
}
