import { eq } from "./eq";

/**
 * Returns val is Empty
 *
 * @func
 * @sig a -> b)
 * @param value
 * @return {Function} A Function :: value -> boolean.
 * @example
 *
 *      const f =v.isEmpty(false); => false
 */
export const isEmpty = (value?: any) => !Boolean(value) || eq({})(value) || eq([])(value);
