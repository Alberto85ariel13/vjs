/**
 * return is Object Plain example returns of query mongodb
 *
 * @func
 * @sig object -> object
 * @param {object} obj
 * @return {object}
 * @example
 *
 *      v.toPlainObj({a:'f'});       //=>  { a: 'f' }
 */
export const toPlainObj = (obj?: object) => JSON.parse(JSON.stringify(obj));
