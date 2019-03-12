import 'mocha';
import { expect } from 'chai';
import { includes } from '../../src/array/includes'

describe('includes', () => {

    it('should return boolean', () => {
        const f = includes(3)
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.equal(true)
        expect(f([2, 2, 16, 2, 6, 12, 36])).to.equal(false)
    });

});
