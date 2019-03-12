import 'mocha';
import { expect } from 'chai';
import { isArray } from './../../src/array/isArray';

describe('isArray', () => {

    it('should return boolean', () => {
        const f = isArray
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.equal(true)
        expect(f('van')).to.equal(false)
    });

});
