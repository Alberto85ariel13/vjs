/**
 * Returns values array.
 *
 * @func
 * @sig {object} -> {array}
 * @param obj
 * @return array
 * @example
 *
 *      v.values({a:1, b:'v', c:[1,2,3]}); //=> [[ 1, 'v', [ 1, 2, 3 ] ]]
 */
export function values(obj?: object) {
    return Object.keys(obj).map(key => obj[key]);
}
