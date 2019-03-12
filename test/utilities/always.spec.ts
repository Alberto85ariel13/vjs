import 'mocha';
import { expect } from 'chai';
import { always } from '../../src/utilities/always'

describe('always', () => {

    it('should return true', () => {
        const f = always(true);
        expect(f()).to.equal(true);
    });
    it('should return number', () => {
        const f = always(3);
        expect(f()).to.equal(3);
    });

});
