const curryFilter = (f: any) => (b: any) => [...b].filter(f);

/**
 * [...b].filter(f)
 *
 * @func
 * @sig function -> array -> array
 * @param {function} f
 * @param {array} b
 * @return {array}
 * @example
 *      const f = val => val%2==0
 *      v.filter(f, [0,2,4,5]);       //=>  [0,2,4]
 *      v.filter(f)([0,2,4,6]);      //=> [0,2,4,6]
 *      v.filter(f, [1,3,9,5]);      //=> []
 */
export function filter(f: any, b: any) {
    return [filter, curryFilter(f), [...b].filter(f)][arguments.length]
}
