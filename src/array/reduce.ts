const curryReduce = (f: any, firstValue: any) => (array: any) => [...array].reduce(f, firstValue);

/**
 * [...array].reduce(f,firstValue)
 *
 * @func
 * @sig (function, T) -> T[] -> T
 * @param {function} f
 * @param {function} firstValue
 * @param {T[]} array
 * @return {T}
 * @example
 *      const f = (val1,val2) => val1+val2
 *      v.reduce(f, 0, [0,2,4,5]);       //=>  11
 *      v.reduce(f,1)([0,2,4,5]);      //=> 12
 */
export function reduce(f: any, firstValue: any, array?: any): any {
    return [curryReduce(f, firstValue), array && [...array].reduce(f, firstValue)][arguments.length - 2]
}
