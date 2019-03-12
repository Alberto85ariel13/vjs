import 'mocha';
import { expect } from 'chai';
import { setDefault } from '../../src/utilities/setDefault'

describe('default', () => {

    it('should return value when null', () => {
        const f = setDefault(2)
        expect(f(null)).to.equal(2);
    });
    it('should return value when undefined', () => {
        const f = setDefault(2)
        expect(f(undefined)).to.equal(2);
    });
    it('should return value when false', () => {
        const f = setDefault(2)
        expect(f(false)).to.equal(false);
    });
    it('should return value when 0', () => {
        const f = setDefault(2)
        expect(f(0)).to.equal(0);
    });
    it('should return value when empty', () => {
        const f = setDefault(2)
        expect(f('')).to.equal('');
    });
});
