import 'mocha';
import { expect } from 'chai';
import { every } from '../../src/array/every'
import { some } from '../../src/array/some'

describe('every & some', () => {

    it('should return boolean', () => {
        const fe = every(val => val % 2 == 0)
        expect(fe([1, 2, 1, 2, 3, 3, 7])).to.equal(false)
        expect(fe([2, 2, 16, 2, 6, 12, 36])).to.equal(true)
        const v1 = every(val => val % 2 == 0, [1, 2, 1, 2, 3, 3, 7]);
        expect(v1).to.equal(false);
        const v2 = every(val => val % 2 == 0, [2, 2, 16, 2, 6, 12, 36]);
        expect(v2).to.equal(true);
    });
    it('should return boolean', () => {
        const fs = some(val => val % 2 != 0)
        expect(fs([1, 2, 1, 2, 3, 3, 7])).to.equal(true)
        expect(fs([2, 2, 16, 2, 6, 12, 36])).to.equal(false)
        const v1 = some(val => val % 2 != 0, [1, 2, 1, 2, 3, 3, 7]);
        expect(v1).to.equal(true);
        const v2 = some(val => val % 2 != 0, [2, 2, 16, 2, 6, 12, 36]);
        expect(v2).to.equal(false);
    });

});
