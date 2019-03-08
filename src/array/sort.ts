const currySort = (comparator: any) => (b: any) => [...b].sort(comparator);

/**
 * [...b].sort(f)
 *
 * @func
 * @sig function -> array -> array
 * @param {function} f
 * @param {array} b
 * @return {array}
 * @example
 *      const f = (val1,val2) => val2-val1
 *      v.sort(f, [0,2,4,5]);       //=>  [5,4,2,0]
 */
export function sort(comparator: any, b?: any) {
    return [sort, currySort(comparator), [...b].sort(comparator)][arguments.length]
}
