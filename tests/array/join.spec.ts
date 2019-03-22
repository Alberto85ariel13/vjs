import 'mocha';
import { expect } from 'chai';
import { join } from './../../src/array/join';

describe('join', () => {

    it('should return boolean', () => {
        const f = join(',')
        expect(f([2, 2, 1, 2, 3, 3, 7])).to.equal('2,2,1,2,3,3,7')
        const v = join(',', [2, 2, 1, 2, 3, 3, 7]);
        expect(v).to.equal('2,2,1,2,3,3,7');
    });

});
