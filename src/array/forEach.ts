const curryForEach = (f: any) => (b: any) => [...b].forEach(f);

/**
 * [...b].forEach(f)
 *
 * @func
 * @sig function -> array -> void
 * @param {function} f
 * @param {T[]} b
 * @return {void}
 * @example
 *      const f = val=>console.log(val)
 *      v.forEach(f, [0,2,4,5]);       //=>  0 2 4 5
 *      v.forEach(f)([1,5,4,6]);      //=> 1 5 4 6
 */
export function forEach(f: any, b?: any): any {
    return [forEach, curryForEach(f), b && [...b].forEach(f)][arguments.length]
}
