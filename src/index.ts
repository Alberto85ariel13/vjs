import { va } from './array';
import { vm } from './math';
import { vo } from './object';
import { vu } from './utilities';
import { concat } from './array/concat'
import { copyWithin } from './array/copyWithin'
import { distinct } from './array/distinct'
import { every } from './array/every'
import { fill } from './array/fill'
import { filter } from './array/filter'
import { findIndex } from './array/findIndex'
import { find } from './array/find'
import { flat } from './array/flat'
import { forEach } from './array/forEach'
import { includes } from './array/includes'
import { isArray } from './array/isArray'
import { join } from './array/join'
import { length } from './array/length'
import { map } from './array/map'
import { push } from './array/push'
import { reduce } from './array/reduce'
import { reduceRight } from './array/reduceRight'
import { removeEmpty } from './array/removeEmpty'
import { removeNull } from './array/removeNull'
import { reverse } from './array/reverse'
import { shift } from './array/shift'
import { slice } from './array/slice'
import { some } from './array/some'
import { sort } from './array/sort'
import { splitChunk } from './array/splitChunk'
import { top } from './array/top'
import { unshift } from './array/unshift'
import { groupByProp } from './array/groupByProp'

import { add } from './math/add'

import { applySpec } from './object/applySpec'
import { assignAllLeft } from './object/assignAllLeft'
import { assignAllRight } from './object/assignAllRight'
import { assignLeft } from './object/assignLeft'
import { assignRight } from './object/assignRight'
import { evolve } from './object/evolve'
import { isObject } from './object/isObject'
import { keys } from './object/keys'
import { omit } from './object/omit'
import { omitEmpty } from './object/omitEmpty'
import { omitNull } from './object/omitNull'
import { pick } from './object/pick'
import { pickBy } from './object/pickBy'
import { prop } from './object/prop'
import { values } from './object/values'
import { toPlainObj } from './object/toPlainObj'

import { always } from './utilities/always'
import { and } from './utilities/and'
import { compose } from './utilities/compose'
import { eq } from './utilities/eq'
import { gt } from './utilities/gt'
import { identity } from './utilities/identity'
import { isEmpty } from './utilities/isEmpty'
import { isNull } from './utilities/isNull'
import { isFunction } from './utilities/isFunction'
import { isIterable } from './utilities/isIterable'
import { lt } from './utilities/lt'
import { not } from './utilities/not'
import { or } from './utilities/or'
import { pipe } from './utilities/pipe'
import { setDefault } from './utilities/setDefault'

const v = {
    concat, copyWithin, distinct, every, fill, filter, findIndex, find, flat, forEach, includes, isArray, join, length, map, push, reduce,
    reduceRight, removeEmpty, removeNull, reverse, shift, slice, some, sort, splitChunk, top, unshift, groupByProp,

    add,

    applySpec, assignAllLeft, assignAllRight, assignLeft, assignRight, evolve, isObject, keys, omit, omitEmpty, omitNull, pick, pickBy,
    prop, values, toPlainObj,

    always, and, compose, eq, gt, identity, isEmpty, isNull, isFunction, isIterable, lt, not, or, pipe, setDefault,
}


export { va, vm, vo, vu, v }
