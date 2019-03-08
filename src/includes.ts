const curryIncludes = (a: any) => (b: any) => b.includes(a);
/**
 * b contain a.
 *
 * @func
 * @sig {array | string} -> {array | string} -> {boolean}
 * @param {array | string} a
 * @param {array | string} b
 * @return {boolean}
 * @example
 *
 *      v.includes('van', 'vanilla');       //=>  true
 *      v.includes('v')(['i','l']);      //=> false
 *      v.includes('v')(['i','l','v']);      //=> true
 */
export function includes(a: any, b: any) {
    return [includes, curryIncludes(a), b.includes(a)][arguments.length]
}
