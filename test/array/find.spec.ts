import 'mocha';
import { expect } from 'chai';
import { find } from '../../src/array/find'

describe('find', () => {

    it('should return array', () => {
        const f = find(val => val % 2 == 1)
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.equal(1)
        expect(f([2, 2, 16, 2, 6, 12, 36])).to.equal(undefined)
    });

});
