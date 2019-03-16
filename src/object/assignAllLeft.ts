import { omitNull } from "./omitNull";

const curryAssign = (obj1: Object, obj2: Object) => Object.assign(obj2, omitNull(obj1))
/**
 * merge deep right
 *
 * @func
 * @sig {object[]} -> {object}
 * @param array
 * @return object
 * @example
 *      const obj1 = {a:1, b:'v', c:[1,2,3]}
 *      const obj2 = {a:3, p:'v'}
 *      v.assignAllLeft([obj1,obj2]); //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
 */
export const assignAllLeft = (array: Object[]): any => array.reduce(curryAssign, {})
