import { or } from './or'
const curryAnyPass = (f: any) => (b: any[]) => b.map(f).reduce(or);

/**
 * Return true if all element pass f() else false.
 *
 * @func
 * @sig function -> array -> boolean
 * @param {function} f
 * @param {array} b
 * @return {boolean}
 * @example
 *      const f = pivot => val => val==pivot
 *      v.allPass(f(0), [0,2,4,5]);       //=>  true
 *      v.allPass(f(6), [0,2,4,6]);      //=> true
 *      v.allPass(f(10), [1,3,9,5]);      //=> false
 */
export function anyPass(f: any, b: any[]) {
    return [anyPass, curryAnyPass(f), b.map(f).reduce(or)][arguments.length]
}
