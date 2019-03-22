import 'mocha';
import { expect } from 'chai';
import { forEach } from '../../src/array/forEach'

describe('forEach', () => {

    it('should return array', () => {
        const result = [];
        const f = forEach((a) => a > 3 && result.push(a));
        f([1, 2, 3, 4, 5, 6, 7])
        expect(result).to.eql([4, 5, 6, 7])
        const result1 = [];
        forEach((a) => a > 3 && result1.push(a), [1, 2, 3, 4, 5, 6, 7]);
        expect(result1).to.eql([4, 5, 6, 7]);
    });

});
