import 'mocha';
import { expect } from 'chai';
import { findIndex } from '../../src/array/findIndex'

describe('findIndex', () => {

    it('should return array', () => {
        const f = findIndex(val => val % 2 == 1)
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.equal(2)
        expect(f([2, 2, 16, 2, 6, 12, 36])).to.equal(-1)
        const v1 = findIndex(val => val % 2 == 1, [2, 2, 1, 2, 3, 3, 7]);
        expect(v1).to.equal(2);
        const v2 = findIndex(val => val % 2 == 1, [2, 2, 16, 2, 6, 12, 36]);
        expect(v2).to.equal(-1);
    });

});
