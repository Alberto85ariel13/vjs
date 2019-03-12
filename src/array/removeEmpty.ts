import { compose } from '../utilities/compose';
import { filter } from './filter';
import { eq } from '../utilities/eq';
import { not } from '../utilities/not';
/**
 * Return array removed empty value.
 *
 * @func
 * @sig {array | string} -> {array | string}
 * @param arr
 * @return array
 * @example
 *
 *      v.removeEmpty(['', 0, 1, 'dd', null, undefined, NaN, {},[]]); //=> [ 1,'dd' ]
 */
export const removeEmpty = compose(filter(compose(not, eq([]))), filter(compose(not, eq({}))), filter(Boolean));


