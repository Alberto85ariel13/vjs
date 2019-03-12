import { isFunction } from "../utilities/isFunction";

const curryApply = (mapping: Object) => (obj: Object) =>
    Object.assign({}, ...Object.keys(mapping).map(prop => {
        return isFunction(mapping[prop]) ? { [prop]: mapping[prop](obj) } : { [prop]: curryApply(mapping[prop])(obj) }
    }));
/**
 * apply mapping functions to object
 *
 * @func
 * @sig {object} -> {object} -> {object}
 * @param mapping
 * @param obj
 * @return object
 * @example
 *      const mapping = {a:v.compose(v.add(5),v.prop('a')), b:v.compose(v.concat('anilla'),v.prop('b'))}
 *      v.curryApply(mapping,{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {a:8,b:'vanilla'}
 *      v.curryApply(mapping)({ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {a:8,b:'vanilla'}
 */
export function applySpec(mapping: Object, obj?: Object): Object {
    return [applySpec, curryApply(mapping), curryApply(mapping)(obj)][arguments.length];
}
