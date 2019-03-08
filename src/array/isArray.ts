/**
 * return is array {true} else {false}
 *
 * @func
 * @sig any -> boolean
 * @param {any} val
 * @return {boolean}
 * @example
 *
 *      v.isArray(['a','f']);       //=>  true
 *      v.isArray('false');      //=> false
 */
export const isArray = (val?: any) => Object.prototype.toString.call(val) === '[object Array]';
