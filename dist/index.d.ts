import { va } from './array';
import { vm } from './math';
import { vo } from './object';
import { vu } from './utilities';
import { concat } from './array/concat';
import { copyWithin } from './array/copyWithin';
import { distinct } from './array/distinct';
import { every } from './array/every';
import { fill } from './array/fill';
import { filter } from './array/filter';
import { findIndex } from './array/findIndex';
import { find } from './array/find';
import { flat } from './array/flat';
import { forEach } from './array/forEach';
import { includes } from './array/includes';
import { join } from './array/join';
import { length } from './array/length';
import { map } from './array/map';
import { push } from './array/push';
import { reduce } from './array/reduce';
import { reduceRight } from './array/reduceRight';
import { reverse } from './array/reverse';
import { shift } from './array/shift';
import { slice } from './array/slice';
import { some } from './array/some';
import { sort } from './array/sort';
import { splitChunk } from './array/splitChunk';
import { top } from './array/top';
import { unshift } from './array/unshift';
import { groupByProp } from './array/groupByProp';
import { add } from './math/add';
import { applySpec } from './object/applySpec';
import { assignLeft } from './object/assignLeft';
import { assignRight } from './object/assignRight';
import { evolve } from './object/evolve';
import { keys } from './object/keys';
import { omit } from './object/omit';
import { pick } from './object/pick';
import { pickBy } from './object/pickBy';
import { prop } from './object/prop';
import { values } from './object/values';
import { always } from './utilities/always';
import { and } from './utilities/and';
import { eq } from './utilities/eq';
import { gt } from './utilities/gt';
import { lt } from './utilities/lt';
import { or } from './utilities/or';
import { setDefault } from './utilities/setDefault';
declare const v: {
    concat: typeof concat;
    copyWithin: typeof copyWithin;
    distinct: typeof distinct;
    every: typeof every;
    fill: typeof fill;
    filter: typeof filter;
    findIndex: typeof findIndex;
    find: typeof find;
    flat: typeof flat;
    forEach: typeof forEach;
    includes: typeof includes;
    isArray: (val?: any) => boolean;
    join: typeof join;
    length: typeof length;
    map: typeof map;
    push: typeof push;
    reduce: typeof reduce;
    reduceRight: typeof reduceRight;
    removeEmpty: (...args: any[]) => any;
    removeNull: (arr?: any) => any;
    reverse: typeof reverse;
    shift: typeof shift;
    slice: typeof slice;
    some: typeof some;
    sort: typeof sort;
    splitChunk: typeof splitChunk;
    top: typeof top;
    unshift: typeof unshift;
    groupByProp: typeof groupByProp;
    add: typeof add;
    applySpec: typeof applySpec;
    assignAllLeft: (array: Object[]) => any;
    assignAllRight: (array: Object[]) => any;
    assignLeft: typeof assignLeft;
    assignRight: typeof assignRight;
    evolve: typeof evolve;
    isObject: (val?: any) => boolean;
    keys: typeof keys;
    omit: typeof omit;
    omitEmpty: (obj: Object) => any;
    omitNull: (obj: Object) => any;
    pick: typeof pick;
    pickBy: typeof pickBy;
    prop: typeof prop;
    values: typeof values;
    toPlainObj: (obj?: object) => any;
    always: typeof always;
    and: typeof and;
    compose: (...fns: any[]) => (...args: any[]) => any;
    eq: typeof eq;
    gt: typeof gt;
    identity: (value?: any) => any;
    isEmpty: (value?: any) => any;
    isNull: (value?: any) => boolean;
    isFunction: (val?: any) => boolean;
    isIterable: (value?: any) => boolean;
    lt: typeof lt;
    not: (a?: boolean) => boolean;
    or: typeof or;
    pipe: (f1: any, ...fns: any[]) => (...args: any[]) => any;
    setDefault: typeof setDefault;
};
export { va, vm, vo, vu, v };
