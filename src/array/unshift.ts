const base = (a: any, b: any) => {
    b.unshift(...a);
    return b;
}
const curryUnshift = (a: any) => (b: any) => base(a, b)
/**
 * b.unshift(...a)
 *
 * @func
 * @sig {array} -> {array} -> {array}
 * @param {array} a
 * @param {array} b
 * @return {array}
 * @example
 *
 *      v.unshift(['n','l'])(['v','a']);      //=> ['n','l','v','a']
 */
export function unshift(a?: any, b?: any) {
    return [unshift, curryUnshift(a), base(a, b)][arguments.length]
}
