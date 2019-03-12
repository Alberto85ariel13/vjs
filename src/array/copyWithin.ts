const curryCopyWithin = (start: number, end: number) => (target: number) => (array: any) => [...array].copyWithin(target, start, end);
/**
 * copy slice from start to end in target array.
 *
 * @func
 * @sig (number,number) -> T -> T[]
 * @param {number} start
 * @param {number} end
 * @param {T} target
 * @param {T[]} array
 * @return {T[]}
 * @example
 *
 *      v.copyWithin(0, 4, 2, [1, 2, 3, 4, 5, 6, 7]);       //=>  [ 1, 2, 1, 2, 3, 4, 7 ]
 *      v.copyWithin(0, 2, 2)([1, 2, 3, 4, 5, 6, 7]);      //=> [ 1, 2, 1, 2, 5, 6, 7 ]
 *      v.copyWithin(3, 6)(1)([1, 2, 3, 4, 5, 6, 7]);      //=> [ 1, 4, 5, 6, 5, 6, 7 ]
 */
export function copyWithin(start: number, end: number, target?: number, array?: any): any {
    return [
        curryCopyWithin(start, end),
        curryCopyWithin(start, end)(target),
        array && curryCopyWithin(start, end)(target)(array)
    ][arguments.length - 2]
}
