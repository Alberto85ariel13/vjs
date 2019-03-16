import { omitNull } from "./omitNull";

const curryAssign = (obj1: Object, obj2: Object) => Object.assign(obj1, omitNull(obj2))
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
 *      v.assignAllRight([obj1,obj2]); //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
 */
export const assignAllRight = (array: Object[]): any => array.reduceRight(curryAssign, {})
