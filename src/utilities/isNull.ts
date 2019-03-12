/**
 * Returns val is null or val is undefined or val is NaN
 *
 * @func
 * @sig a -> b)
 * @param value
 * @return {Function} A Function :: value -> boolean.
 * @example
 *
 *      const f =v.isNull(false); => false
 */
export const isNull = (value?: any) => value !== 0 && value !== '' && value !== false && !Boolean(value);
