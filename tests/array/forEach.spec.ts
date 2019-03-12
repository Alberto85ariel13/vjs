import 'mocha';
import { expect } from 'chai';
import { forEach } from '../../src/array/forEach'

describe('filter', () => {

    it('should return array', () => {
        const result = [];
        const f = forEach((a) => a > 3 && result.push(a));
        f([1, 2, 3, 4, 5, 6, 7])
        expect(result).to.eql([4, 5, 6, 7])
    });

});
