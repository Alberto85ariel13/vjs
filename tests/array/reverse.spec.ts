import 'mocha';
import { expect } from 'chai';
import { reverse } from '../../src/array/reverse'

describe('reverse', () => {

    it('should return array', () => {
        const f = reverse;
        expect(f([1, 2, 3, 4])).to.eql([4, 3, 2, 1])
    });

});
