import { applySpec } from './applySpec';
import { assignLeft } from './assignLeft';
import { assignRight } from './assignRight';
import { evolve } from './evolve';
import { keys } from './keys';
import { omit } from './omit';
import { pick } from './pick';
import { pickBy } from './pickBy';
import { prop } from './prop';
import { values } from './values';
export declare const vo: {
    applySpec: typeof applySpec;
    assignAllLeft: (array: Object[]) => Object;
    assignAllRight: (array: Object[]) => Object;
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
};
