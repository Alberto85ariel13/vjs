import 'mocha';
import { expect } from 'chai';
import { omit } from './../../src/object/omit';
import { omitEmpty } from './../../src/object/omitEmpty';
import { omitNull } from './../../src/object/omitNull';

describe('omit & omitEmpty & omitNull', () => {

    it('omit should return object', () => {
        const f = omit(['a', 'b']);
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql({ c: [1, 2, 3], p: 'v' })
        const v = omit(['a', 'b'], { a: 3, b: 'v', c: [1, 2, 3], p: 'v' });
        expect(v).to.eql({ c: [1, 2, 3], p: 'v' });
    });
    it('omitEmpty should return object', () => {
        const f = omitEmpty;
        expect(f({ a: {}, b: [], t: '', g: 0, w: null, r: undefined, c: [1, 2, 3], p: 'v' })).to.eql({ c: [1, 2, 3], p: 'v' })
    });
    it('omitNull should return object', () => {
        const f = omitNull;
        expect(f({ a: {}, b: [], t: '', g: 0, w: null, r: undefined, c: [1, 2, 3], p: 'v' })).to.eql({ a: {}, b: [], t: '', g: 0, c: [1, 2, 3], p: 'v' })
    });
});
