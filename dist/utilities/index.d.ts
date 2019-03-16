import { always } from './always';
import { and } from './and';
import { eq } from './eq';
import { gt } from './gt';
import { lt } from './lt';
import { or } from './or';
import { setDefault } from './setDefault';
export declare const vu: {
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
