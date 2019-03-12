import 'mocha';
import { expect } from 'chai';
import { copyWithin } from '../../src/array/copyWithin'

describe('copyWithin', () => {

    it('should return array', () => {
        const f = copyWithin(0, 2, 2);
        expect(f([1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 1, 2, 5, 6, 7])
    });

});
