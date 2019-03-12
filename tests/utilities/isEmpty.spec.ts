import 'mocha';
import { expect } from 'chai';
import { isEmpty } from '../../src/utilities/isEmpty'

describe('isEmpty', () => {

    it('should returns when null', () => {
        expect(isEmpty(null)).to.equal(true);
    });
    it('should returns when 0', () => {
        expect(isEmpty(0)).to.equal(true);
    });
    it('should returns when empty', () => {
        expect(isEmpty('')).to.equal(true);
    });
    it('should returns when {}', () => {
        expect(isEmpty({})).to.equal(true);
    });
    it('should returns when []', () => {
        expect(isEmpty([])).to.equal(true);
    });
    it('should returns when [1,2]', () => {
        expect(isEmpty([1, 2])).to.equal(false);
    });
});
