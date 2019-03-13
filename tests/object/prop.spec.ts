import 'mocha';
import { expect } from 'chai';
import { prop } from './../../src/object/prop';

describe('prop', () => {

    it('should return value', () => {
        const f = prop('c');
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql([1, 2, 3])
    });
});
