const curryOmit = (props: any) => (obj: Object) => Object.assign({}, ...(Object.keys(obj).filter(key => !props.includes(key))).map(prop => ({
    [prop]: obj[prop]
})));
/**
 * omit props
 *
 * @func
 * @sig {string[]} -> {object} -> {object}
 * @param props
 * @param obj
 * @return object
 * @example
 *      v.omit(['a','b'],{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {c: [ 1, 2, 3 ], p: 'v'}
 *      v.omit(['a','c'],{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {b: 'v',, p: 'v'}
 */
export function omit(props?: string[], obj?: Object): any {
    return [omit, curryOmit(props), obj && curryOmit(props)(obj)][arguments.length];
}
