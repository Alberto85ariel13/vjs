/**
 * Returns val is Iterable
 *
 * @func
 * @sig a -> b)
 * @param value
 * @return {Function} A Function :: value -> boolean.
 * @example
 *
 *      const f =v.isIterable(false); => false
 *      const f =v.isIterable({a:3}); => false
 *      const f =v.isIterable([1,2]); => true
 *      const f =v.isIterable('abc'); => true
 */
export const isIterable = (value?: any) => value && typeof value[Symbol.iterator] === 'function';
