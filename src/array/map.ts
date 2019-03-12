const curryMap = (f: any) => (b: any) => [...b].map(f);

/**
 * [...b].map(f)
 *
 * @func
 * @sig function -> array -> array
 * @param {function} f
 * @param {array} b
 * @return {array}
 * @example
 *      const f = val => val*val
 *      v.map(f, [0,2,4,5]);       //=>  [0,4,16,25]
 */
export function map(f: any, b?: any): any {
    return [map, curryMap(f), b && [...b].map(f)][arguments.length]
}
