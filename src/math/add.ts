const curryAdd = (a: number) => (b: number) => a + b;
/**
 * Adds two values.
 *
 * @func
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @example
 *
 *      v.add(1, 2);       //=>  3
 *      v.add(1)(4);      //=> 5
 */
export function add(a?: number, b?: number): any {
    return [add, curryAdd(a), curryAdd(a)(b)][arguments.length]
}
