const curryAssign = (obj1: Object) => (obj2: Object) => Object.assign(obj2, obj1)
/**
 * merge deep right
 *
 * @func
 * @sig {object} -> {object} -> {object}
 * @param obj1
 * @param obj2
 * @return object
 * @example
 *      const obj1 = {a:1, b:'v', c:[1,2,3]}
 *      const obj2 = {a:3, p:'v'}
 *      v.assignRight(obj1,obj2); //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
 *      v.assignRight(obj1)(obj2); //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
 */
export function assignLeft(obj1?: Object, obj2?: Object): Object {
    return [assignLeft, curryAssign(obj1), curryAssign(obj1)(obj2)][arguments.length];
}
