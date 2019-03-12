import 'mocha';
import { expect } from 'chai';
import { fill } from '../../src/array/fill'

describe('fill', () => {

    it('should return array', () => {
        const f = fill(0, 2, 5);
        expect(f([1, 2, 3, 4, 5, 6, 7])).to.eql([5, 5, 3, 4, 5, 6, 7])
    });

});
