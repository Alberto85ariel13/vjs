/**
 * Performs left-to-right function composition.
 *
 * @func
 * @category Function
 * @sig f1 -> (* -> ...f) -> {fns composition}
 * @param {...function} fns
 * @return {Function}
 * @example
 *
 *     const f = v.pipe(v.filter(v.gt(3)), v.shift, Math.pow);
 *      f([1,2,6,7,4]); //=> 36
 */
export const pipe = (f1, ...fns) => (...args) => {
    return fns.reduce((res, fn) => fn(res), f1.apply(null, args));
};
