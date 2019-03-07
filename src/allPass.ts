import { and } from './and'
const curryAllPass = (f: any) => (b: any[]) => b.map(f).reduce(and);

/**
 * Return true if all element pass f() else false.
 *
 * @func
 * @sig function -> array -> boolean
 * @param {function} f
 * @param {array} b
 * @return {boolean}
 * @example
 *      const f = val => val%2==0
 *      v.allPass(f, [0,2,4,5]);       //=>  false
 *      v.allPass(f, [0,2,4,6]);      //=> true
 *      v.allPass(f, [1,3,9,5]);      //=> false
 */
export function allPass(f: any, b: any[]) {
    return [allPass, curryAllPass(f), b.map(f).reduce(and)][arguments.length]
}
