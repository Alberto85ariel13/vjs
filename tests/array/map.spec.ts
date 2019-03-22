import 'mocha';
import { expect } from 'chai';
import { map } from './../../src/array/map';

describe('map', () => {

    it('should return array', () => {
        const f = map(a => a * a);
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.eql([4, 4, 1, 4, 9, 9, 49])
        const v = map(a => a * a, [2, 2, 1, 2, 3, 3, 7]);
        expect(v).to.eql([4, 4, 1, 4, 9, 9, 49]);
    });

});
