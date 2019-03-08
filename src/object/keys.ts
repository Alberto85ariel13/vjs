/**
 * Returns keys array.
 *
 * @func
 * @sig {object} -> {array}
 * @param obj
 * @return array
 * @example
 *
 *      v.keys({a:1, b:'v', c:[1,2,3]}); //=> ['a','b','c']
 */
export function keys(obj?: object) {
    return Object.keys(obj);
}
