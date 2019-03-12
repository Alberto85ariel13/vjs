import 'mocha';
import { expect } from 'chai';
import { every } from '../../src/array/every'
import { some } from '../../src/array/some'

describe('every & some', () => {

    it('should return boolean', () => {
        const fe = every(val => val % 2 == 0)
        expect(fe([1, 2, 1, 2, 3, 3, 7])).to.equal(false)
        expect(fe([2, 2, 16, 2, 6, 12, 36])).to.equal(true)
    });
    it('should return boolean', () => {
        const fs = some(val => val % 2 != 0)
        expect(fs([1, 2, 1, 2, 3, 3, 7])).to.equal(true)
        expect(fs([2, 2, 16, 2, 6, 12, 36])).to.equal(false)
    });

});
