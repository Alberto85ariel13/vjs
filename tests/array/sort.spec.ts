import 'mocha';
import { expect } from 'chai';
import { sort } from '../../src/array/sort'

describe('sort', () => {

    it('should return array', () => {
        const f = sort((val1, val2) => val2 - val1);
        expect(f([4, 3, 3, 4])).to.eql([4, 4, 3, 3])
        const v = sort((val1, val2) => val2 - val1, [4, 3, 3, 4]);
        expect(v).to.eql([4, 4, 3, 3]);
    });

});
