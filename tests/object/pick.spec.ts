import 'mocha';
import { expect } from 'chai';
import { pick } from './../../src/object/pick';
import { pickBy } from './../../src/object/pickBy';
import { includes } from './../../src/array/includes';
import { isIterable } from './../../src/utilities/isIterable';

describe('pick & pickBy', () => {

    it('pick should return object', () => {
        const f = pick(['a', 'b']);
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql({ a: 3, b: 'v' })
        const v = pick(['a', 'b'], { a: 3, b: 'v', c: [1, 2, 3], p: 'v' });
        expect(v).to.eql({ a: 3, b: 'v' });
    });
    it('pickBy should return object', () => {
        const f = pickBy(val => isIterable(val) && includes('v', val));
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'anv' })).to.eql({ b: 'v', p: 'anv' })
        const v = pickBy(val => isIterable(val) && includes('v', val), { a: 3, b: 'v', c: [1, 2, 3], p: 'anv' });
        expect(v).to.eql({ b: 'v', p: 'anv' });
    });
});
