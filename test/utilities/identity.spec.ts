import 'mocha';
import { expect } from 'chai';
import { identity } from './../../src/utilities/identity';

describe('identity', () => {

    it('should returns when null', () => {
        expect(identity(null)).to.equal(null);
    });
    it('should returns when 0', () => {
        expect(identity(0)).to.equal(0);
    });
});
