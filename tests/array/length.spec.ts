import 'mocha';
import { expect } from 'chai';
import { length } from './../../src/array/length';

describe('length', () => {

    it('should return number', () => {
        const f = length;
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.equal(7)
    });

});
