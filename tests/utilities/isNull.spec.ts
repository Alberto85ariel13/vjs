import 'mocha';
import { expect } from 'chai';
import { isNull } from './../../src/utilities/isNull';

describe('isNull', () => {

    it('should returns when null', () => {
        expect(isNull(null)).to.equal(true);
    });
    it('should returns when 0', () => {
        expect(isNull(undefined)).to.equal(true);
    });
    it('should returns when empty', () => {
        expect(isNull('')).to.equal(false);
    });
    it('should returns when {}', () => {
        expect(isNull({})).to.equal(false);
    });
    it('should returns when []', () => {
        expect(isNull([])).to.equal(false);
    });
    it('should returns when [1,2]', () => {
        expect(isNull(0)).to.equal(false);
    });
});
