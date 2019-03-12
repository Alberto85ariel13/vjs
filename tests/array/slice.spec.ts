import 'mocha';
import { expect } from 'chai';
import { slice } from '../../src/array/slice'

describe('slice', () => {

    it('should return array', () => {
        const f = slice(1, 3);
        expect(f([1, 2, 3, 4])).to.eql([2, 3])
    });

});
