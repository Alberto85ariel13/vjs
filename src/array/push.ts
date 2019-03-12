const base = (a: any, b: any) => {
    b.push(...a);
    return b;
}
const curryPush = (a: any) => (b: any) => base(a, b)
/**
 * b.push(...a)
 *
 * @func
 * @sig {array} -> {array} -> {array}
 * @param {array} a
 * @param {array} b
 * @return {array}
 * @example
 *
 *      v.push(['n','l'])(['v','a']);      //=> ['v','a','n','l']
 */
export function push(a?: any, b?: any): any {
    return [push, curryPush(a), b && base(a, b)][arguments.length]
}
