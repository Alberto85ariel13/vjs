import 'mocha';
import { expect } from 'chai';
import { removeEmpty } from './../../src/array/removeEmpty';
import { removeNull } from './../../src/array/removeNull';

describe('removeEmpty & removeNull', () => {

    it('removeEmpty should return array', () => {
        const f = removeEmpty;
        expect(f([1, '', 0, null, undefined, NaN, {}, , [], 7])).to.eql([1, 7])
    });
    it('removeNull should return array', () => {
        const f = removeNull;
        expect(f([1, '', 0, null, undefined, NaN, {}, , [], 7])).to.eql([1, '', 0, {}, [], 7])
    });

});
