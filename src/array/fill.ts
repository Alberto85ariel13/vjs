const curryFill = (start: number, end: number) => (value: any) => (array: any[]) => [...array].fill(value, start, end);
/**
 * [...array].fill(value, start, end)
 *
 * @func
 * @sig (number,number) -> T -> T[]
 * @param {number} start
 * @param {number} end
 * @param {T} value
 * @param {T[]} array
 * @return {T[]}
 * @example
 *
 *      v.fill(0, 4, 2, [1, 2, 3, 4, 5, 6, 7]);       //=>  [ 2, 2, 2, 2, 5, 6, 7 ]
 *      v.fill(0, 2, 2)([1, 2, 3, 4, 5, 6, 7]);      //=> [ 2, 2, 3, 4, 5, 6, 7 ]
 *      v.fill(3, 6)(1)([1, 2, 3, 4, 5, 6, 7]);      //=> [ 1, 4, 5, 1, 1, 1, 7 ]
 */
export function fill(start: number, end: number, value?: any, array?: any): any {
    return [
        curryFill(start, end),
        curryFill(start, end)(value),
        array && [...array].fill(value, start, end)
    ][arguments.length - 2]
}
