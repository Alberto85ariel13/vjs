import 'mocha';
import { expect } from 'chai';
import { evolve } from '../../src/object/evolve'
import { concat } from '../../src/array/concat'
import { add } from '../../src/math/add'

describe('evolve', () => {

    it('should return object', () => {
        const applyObj = { a: add(5), b: concat('anilla') }
        const f = evolve(applyObj); //=> {a:8,b:'vanilla',c: [ 1, 2, 3 ], p: 'v'}
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql({ a: 8, b: 'vanilla', c: [1, 2, 3], p: 'v' })
    });
});
