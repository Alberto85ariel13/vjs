import 'mocha';
import { expect } from 'chai';
import { concat } from '../../src/array/concat'
import { unshift } from '../../src/array/unshift'

describe('concat & unshift', () => {

    it('should return string', () => {
        const f = concat('anilla');
        expect(f('v')).to.equal('vanilla');
        const v = concat('anilla', 'v');
        expect(v).to.eql('vanilla');
    });
    it('concat should return array', () => {
        const f = concat([3, 4, 5]);
        expect(f([1, 2])).to.eql([1, 2, 3, 4, 5]);
        const v = concat([3, 4, 5], [1, 2]);
        expect(v).to.eql([1, 2, 3, 4, 5]);
    });
    it('unshift should return array', () => {
        const f = unshift([3, 4, 5]);
        expect(f([1, 2])).to.eql([3, 4, 5, 1, 2]);
        const v = unshift([3, 4, 5], [1, 2]);
        expect(v).to.eql([3, 4, 5, 1, 2]);
    });

});
