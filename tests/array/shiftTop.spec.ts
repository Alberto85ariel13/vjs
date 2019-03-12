import 'mocha';
import { expect } from 'chai';
import { shift } from '../../src/array/shift'
import { top } from '../../src/array/top'

describe('shift & top', () => {

    it('should return array', () => {
        const fs = shift;
        const ft = top;
        expect(fs([1, 2, 3, 4])).to.equal(1)
        expect(ft([1, 2, 3, 4])).to.equal(4)
    });

});
