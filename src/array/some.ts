const currySome = (f: any) => (b: any) => [...b].some(f);

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
 *      v.some(f(0), [0,2,4,5]);       //=>  true
 *      v.some(f(6), [0,2,4,6]);      //=> true
 *      v.some(f(10), [1,3,9,5]);      //=> false
 */
export function some(f: any, b?: any): any {
    return [some, currySome(f), b && [...b].some(f)][arguments.length]
}
