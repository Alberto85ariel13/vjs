/**
 * Returns value
 *
 * @func
 * @category Function
 * @sig a -> a)
 * @param value
 * @return {Function} A Function :: value -> value.
 * @example
 *
 *      v.identity(true); //=> true
 */
export const identity = (value?: any) => value;
