/**
 * Performs right-to-left function composition.
 *
 * @func
 * @category Function
 * @sig f1 -> (* -> ...f) -> {fns composition}
 * @param {...function} fns
 * @return {Function}
 * @example
 *
 *     const f = v.compose(Math.pow, v.shift, v.filter(v.gt(3)));
 *      f([1,2,6,7,4]); //=> 36
 */
export const compose = (...fns) => (...args) => {
    return fns.slice(0, -1).reduceRight((res, fn) => fn(res),
        fns[fns.length - 1].apply(null, args)
    );
};;
