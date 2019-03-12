const curryConcat = (a: any) => (b: any) => b.concat(a);
/**
 * concat two values.
 *
 * @func
 * @sig {array | string} -> {array | string} -> {array | string}
 * @param {array | string} a
 * @param {array | string} b
 * @return {array | string}
 * @example
 *
 *      v.concat('illa','van');       //=>  vanilla
 *      v.concat(['i','l'])(['v','a','n']);      //=> ['v','a','n','i','l']
 */
export function concat(a?: any, b?: any) {
    return [concat, curryConcat(a), a.concat(b)][arguments.length]
}
