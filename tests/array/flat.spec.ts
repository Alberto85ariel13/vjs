import 'mocha';
import { expect } from 'chai';
import { flat } from '../../src/array/flat'

describe('flat', () => {

    it('should return array', () => {
        const f = flat;
        expect(f([4, 8, [3, [4, 4]], undefined, [6]])).to.eql([4, 8, 3, 4, 4, undefined, 6])
    });

});
