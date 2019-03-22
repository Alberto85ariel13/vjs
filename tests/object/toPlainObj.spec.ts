import 'mocha';
import { expect } from 'chai';
import { v } from './../../src'

describe('toPlainObj', () => {

    it('should return object', () => {
        const obj = {a:'f'};
        const f = v.toPlainObj;
        // objects have different memory addressess thats why we compare to JSON string repr.
        expect(JSON.stringify(f(obj))).to.equal(JSON.stringify(obj));
    });
});
