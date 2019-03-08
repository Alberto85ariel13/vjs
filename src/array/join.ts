const curryJoin = (separator: string) => (b: any) => [...b].join(separator);

/**
 * [...b].join(f)
 *
 * @func
 * @sig string -> array -> string
 * @param {string} separator
 * @param {array | string} b
 * @return {string}
 * @example
 *      v.join('|', [0,2,4,5]);       //=>  0|2|4|5
 *      v.join(',')([0,2,4,6]);      //=> 0,2,4,6
 *      v.join('-', 'van');      //=> v-a-n
 */
export function join(separator: string, b?: any) {
    return [join, curryJoin(separator), [...b].join(separator)][arguments.length]
}
