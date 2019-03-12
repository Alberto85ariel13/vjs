import 'mocha';
import { expect } from 'chai';
import { isFunction } from './../../src/utilities/isFunction';

describe('isFunction', () => {

    it('should returns when function', () => {
        const f = (a) => a + 1;
        expect(isFunction(f)).to.equal(true);
    });
    it('should returns when value', () => {
        const f = (a) => a + 1;
        expect(isFunction(f(3))).to.equal(false);
    });
    it('should returns when null', () => {
        expect(isFunction(null)).to.equal(false);
    });
});
