const curryChunk = (chunkSize: number) => (array: any) => {
    return [...array].reduce((acc, each, index, src) => {
        if (!(index % chunkSize)) {
            return [...acc, src.slice(index, index + chunkSize)];
        }
        return acc;
    },
        []);
}

/**
 * split array by chunk size
 *
 * @func
 * @sig number -> array -> array
 * @param {number} chunkSize
 * @param {T[]} array
 * @return {T[T[]]}
 * @example
 *      v.splitChunk(2, [0,2,4,5]);       //=>  [[0,2],[4,5]]
 *      v.splitChunk(3)([1,5,4,6]);      //=> [[1,5,4],[6]]
 */
export function splitChunk(chunkSize?: number, array?: any) {
    return [splitChunk, curryChunk(chunkSize), array && curryChunk(chunkSize)(array)][arguments.length]
}
