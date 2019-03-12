/**
 * Gets the timestamp (in milliseconds) that have elapsed since the Unix epoch (January 1st, 1970 00:00:00 UTC).
 *
 * @func
 * @sig void -> Number
 * @return {Number}
 * @example
 *
 *      v.now();       //=>  1552414981408
 */
export function now() {
    return Date.now();
}
