import { isNull } from "../utilities/isNull";

/**
 * omit props null
 *
 * @func
 * @sig {string[]} -> {object} -> {object}
 * @param props
 * @param obj
 * @return object
 * @example
 *      v.omitNull({ a: 0, b: 'v', c: [ 1, 2, 3 ], p: 'v', n1:null, n2: undefined }); //=> { a: 0, b: 'v',c: [ 1, 2, 3 ], p: 'v'}
 */
export const omitNull = (obj: Object) => Object.assign({}, ...(Object.keys(obj).filter(key => !isNull(obj[key]))).map(prop => ({
    [prop]: obj[prop]
})));
