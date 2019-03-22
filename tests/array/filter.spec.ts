import 'mocha';
import { expect } from 'chai';
import { filter } from '../../src/array/filter'

describe('filter', () => {

    it('should return array', () => {
        const f = filter((a) => a > 3);
        expect(f([1, 2, 3, 4, 5, 6, 7])).to.eql([4, 5, 6, 7])
        const v = filter((a) => a > 3, [1, 2, 3, 4, 5, 6, 7]);
        expect(v).to.eql([4, 5, 6, 7]);
    });

});
