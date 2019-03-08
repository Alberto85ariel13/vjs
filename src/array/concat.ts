const curryConcat = (a: any) => (b: any) => a.concat(b);
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
 *      v.concat('van', 'illa');       //=>  vanilla
 *      v.concat(['v','a','n'])(['i','l']);      //=> ['v','a','n','i','l']
 */
export function concat(a?: any, b?: any) {
    return [concat, curryConcat(a), a.concat(b)][arguments.length]
}
