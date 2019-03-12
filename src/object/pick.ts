const curryPick = (props: string[]) => (obj: Object) => Object.assign({}, ...props.map(prop => ({
    [prop]: obj[prop]
})));
/**
 * pick props
 *
 * @func
 * @sig {string[]} -> {object} -> {object}
 * @param props
 * @param obj
 * @return object
 * @example
 *      v.pick(['a','b'],{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {a:3,b:'v'}
 *      v.pick(['a','c'],{ a: 3, b: 'v', c: [ 1, 2, 3 ], p: 'v' }); //=> {a:3,c: [ 1, 2, 3 ]}
 */
export function pick(props?: string[], obj?: Object): Object {
    return [pick, curryPick(props), curryPick(props)(obj)][arguments.length];
}
