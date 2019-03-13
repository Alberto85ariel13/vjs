import 'mocha';
import { expect } from 'chai';
import { values } from './../../src/object/values';

describe('values', () => {

    it('should return array values', () => {
        const f = values;
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql([3, 'v', [1, 2, 3], 'v'])
    });
});
