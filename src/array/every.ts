const curryEvery = (f: any) => (b: any) => [...b].every(f);

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
 *      v.every(f, [0,2,4,5]);       //=>  false
 *      v.every(f, [0,2,4,6]);      //=> true
 *      v.every(f, [1,3,9,5]);      //=> false
 */
export function every(f: any, b: any) {
    return [every, curryEvery(f), [...b].every(f)][arguments.length]
}
