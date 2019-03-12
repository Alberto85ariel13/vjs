import 'mocha';
import { expect } from 'chai';
import { eq } from './../../src/utilities/eq';

describe('eq', () => {
    it('should returns when number', () => {
        expect(eq(3, 7)).to.equal(false);
    });
    it('should returns when string', () => {
        expect(eq('vanilla')('vanilla')).to.equal(true);
    });
    it('should returns when object', () => {
        expect(eq({ a: 1, b: ['1', '2'] })({ a: 1, b: ['1', '2'] })).to.equal(true);
    });
    it('should returns when array', () => {
        expect(eq([1, 2, 'v'])([1, 2, 'v'])).to.equal(true);
    });

});
