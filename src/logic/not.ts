
/**
 * a=!a
 *
 * @func
 * @sig boolean -> boolean
 * @param {boolean} a
 * @return {boolean}
 * @example
 *
 *      v.not(true);       //=>  false
 *      v.not(false);      //=> true
 */
export const not = (a: boolean) => !a;
