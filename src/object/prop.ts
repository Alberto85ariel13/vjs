const curryProp = (prop: string) => (obj: Object) => obj && obj[prop];
/**
 * value prop of object
 *
 * @func
 * @sig {string} -> {object} -> {object}
 * @param prop
 * @param obj
 * @return any
 * @example
 *      v.prop('a',{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> 3
 *      v.prop('c')({ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> [ 1, 2, 3 ]
 */
export function prop(prop?: string, obj?: Object): any {
    return [prop, curryProp(prop), obj && curryProp(prop)(obj)][arguments.length];
}
