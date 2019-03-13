import 'mocha';
import { expect } from 'chai';
import { isObject } from './../../src/object/isObject';

describe('isObject', () => {

    it('should return boolean', () => {
        const f = isObject; //=> {a:8,b:'vanilla',c: [ 1, 2, 3 ], p: 'v'}
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.equal(true)
        expect(f({})).to.equal(true)
        expect(f(null)).to.equal(false)
        expect(f([])).to.equal(false)
    });
});
