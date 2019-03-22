import 'mocha';
import { expect } from 'chai';
import { reduce } from '../../src/array/reduce'
import { reduceRight } from '../../src/array/reduceRight'

describe('reduce & reduceRight', () => {

    it('should reduce return number', () => {
        const f = reduce((a, b) => [a, b], [])
        expect(f([2, 2, 1])).to.eql([[[[], 2], 2], 1])
        const v = reduce((a, b) => [a, b], [], [2, 2, 1]);
        expect(v).to.eql([[[[], 2], 2], 1]);
    });
    it('should reduce Right return number', () => {
        const f = reduceRight((a, b) => [a, b], [])
        expect(f([2, 2, 1])).to.eql([[[[], 1], 2], 2])
        const v = reduceRight((a, b) => [a, b], [], [2, 2, 1]);
        expect(v).to.eql([[[[], 1], 2], 2]);
    });

});
