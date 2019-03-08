/**
 * Returns a function that always returns the given value.
 *
 * @func
 * @category Function
 * @sig a -> (* -> a)
 * @param value
 * @return {Function} A Function :: * -> value.
 * @example
 *
 *      const f =v.always(true);
 *      f(); //=> true
 */
export function always(value: any) {
    return function () {
        return value;
    };
};
