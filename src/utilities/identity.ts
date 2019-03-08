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
 *      const f =v.identity(true);
 *      f(); //=> true
 */
export const identity = (value?: any) => value;
