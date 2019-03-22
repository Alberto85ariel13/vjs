import 'mocha';
import { expect } from 'chai';
import { splitChunk } from '../../src/array/splitChunk'

describe('splitChunk', () => {

    it('should return array', () => {
        const f = splitChunk(3);
        expect(f([4, 3, 3, 4])).to.eql([[4, 3, 3], [4]])
        const v = splitChunk(3, [4, 3, 3, 4]);
        expect(v).to.eql([[4, 3, 3], [4]]);
    });

});
