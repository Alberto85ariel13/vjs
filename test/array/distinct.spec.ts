import 'mocha';
import { expect } from 'chai';
import { distinct } from '../../src/array/distinct'

describe('distinct', () => {

    it('should return array', () => {
        const f = distinct;
        expect(f([1, 2, 1, 2, 3, 3, 7])).to.eql([1, 2, 3, 7])
    });

});
