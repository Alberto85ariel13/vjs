const curryReduceRight = (f: any, firstValue: any) => (array: any) => [...array].reduceRight(f, firstValue);

/**
 * [...array].reduceRight(f,firstValue)
 *
 * @func
 * @sig (function, T) -> T[] -> T
 * @param {function} f
 * @param {function} firstValue
 * @param {T[]} array
 * @return {T}
 * @example
 *      const f = (val1,val2) => val1+val2
 *      v.reduceRight(f, 0, [0,2,4,5]);       //=>  11
 *      v.reduceRight(f,1)([0,2,4,5]);      //=> 12
 */
export function reduceRight(f: any, firstValue: any, array: any) {
    return [curryReduceRight(f, firstValue), [...array].reduceRight(f, firstValue)][arguments.length - 2]
}
