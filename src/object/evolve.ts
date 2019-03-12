const curryEvolve = (applyObj: Object) => (obj: Object) => Object.assign(obj, ...Object.keys(applyObj).map(prop => ({
    [prop]: applyObj[prop](obj[prop])
})));
/**
 * pick props
 *
 * @func
 * @sig {object} -> {object} -> {object}
 * @param props
 * @param obj
 * @return object
 * @example
 *      const applyObj = {a:v.add(5), b:v.concat('anilla')}
 *      v.curryEvolve(applyObj,{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {a:8,b:'vanilla',c: [ 1, 2, 3 ], p: 'v'}
 *      v.curryEvolve(applyObj)({ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {a:8,b:'vanilla',c: [ 1, 2, 3 ], p: 'v'}
 */
export function evolve(applyObj: Object, obj?: Object): Object {
    return [evolve, curryEvolve(applyObj), curryEvolve(applyObj)(obj)][arguments.length];
}
