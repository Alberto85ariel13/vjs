const curryFindIndex = (f: any) => (b: any) => [...b].findIndex(f);

/**
 * [...b].findIndex(f)
 *
 * @func
 * @sig function -> array -> number
 * @param {function} f
 * @param {T[]} b
 * @return {number}
 * @example
 *      const f = val => val%2==0
 *      v.findIndex(f, [0,2,4,5]);       //=>  0
 *      v.findIndex(f)([1,5,4,6]);      //=> 3
 *      v.findIndex(f, [1,3,9,5]);      //=> -1
 */
export function findIndex(f: any, b: any) {
    return [findIndex, curryFindIndex(f), [...b].findIndex(f)][arguments.length]
}
