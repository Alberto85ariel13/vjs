const curryFind = (f: any) => (b: any) => [...b].find(f);

/**
 * [...b].find(f)
 *
 * @func
 * @sig function -> array -> T
 * @param {function} f
 * @param {T[]} b
 * @return {T}
 * @example
 *      const f = val => val%2==0
 *      v.find(f, [0,2,4,5]);       //=>  0
 *      v.find(f)([1,5,4,6]);      //=> 4
 *      v.find(f, [1,3,9,5]);      //=> undefined
 */
export function find(f: any, b: any) {
    return [find, curryFind(f), [...b].find(f)][arguments.length]
}
