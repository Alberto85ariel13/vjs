/**
 * return is Function {true} else {false}
 *
 * @func
 * @sig any -> boolean
 * @param {any} val
 * @return {boolean}
 * @example
 *
 *      v.isFunction({a:'f'});       //=>  false
 *      v.isFunction((a)=>console.log(a));      //=> true
 */
export const isFunction = (val?: any) => Object.prototype.toString.call(val) === '[object Function]';
