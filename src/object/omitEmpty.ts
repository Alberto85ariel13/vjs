import { isEmpty } from './../utilities/isEmpty';

/**
 * omit props null
 *
 * @func
 * @sig {string[]} -> {object} -> {object}
 * @param props
 * @param obj
 * @return object
 * @example
 *      v.omitEmpty({ a: 0, b: 'v', c: [ 1, 2, 3 ], p: 'v', n1:null, n2: undefined }); //=> { a: 0, b: 'v',c: [ 1, 2, 3 ], p: 'v'}
 */
export const omitEmpty = (obj: Object) => Object.assign({}, ...(Object.keys(obj).filter(key => !isEmpty(obj[key]))).map(prop => ({
    [prop]: obj[prop]
})));
