/**
 * return is Object {true} else {false}
 *
 * @func
 * @sig any -> boolean
 * @param {any} val
 * @return {boolean}
 * @example
 *
 *      v.isObject({a:'f'});       //=>  true
 *      v.isObject('false');      //=> false
 */
export const isObject = (val?: any) => Object.prototype.toString.call(val) === '[object Object]';
