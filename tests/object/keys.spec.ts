import 'mocha';
import { expect } from 'chai';
import { keys } from './../../src/object/keys';

describe('keys', () => {

    it('should return array', () => {
        const f = keys; //=> {a:8,b:'vanilla',c: [ 1, 2, 3 ], p: 'v'}
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql(['a', 'b', 'c', 'p'])
        expect(f({})).to.eql([])
    });
});
