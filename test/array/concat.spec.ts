import 'mocha';
import { expect } from 'chai';
import { concat } from '../../src/array/concat'
import { unshift } from '../../src/array/unshift'

describe.only('concat & unshift', () => {

    it('should return string', () => {
        const f = concat('anilla');
        expect(f('v')).to.equal('vanilla');
    });
    it('concat should return array', () => {
        const f = concat([3, 4, 5]);
        expect(f([1, 2])).to.eql([1, 2, 3, 4, 5]);
    });
    it('unshift should return array', () => {
        const f = unshift([3, 4, 5]);
        expect(f([1, 2])).to.eql([3, 4, 5, 1, 2]);
    });

});
