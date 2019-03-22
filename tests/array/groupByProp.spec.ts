import 'mocha';
import { expect } from 'chai';
import { groupByProp } from './../../src/array/groupByProp';

describe('groupByProp', () => {

    it('should return array', () => {
        const f = groupByProp('a');
        expect(f([{ a: 1, b: 2 }, { a: 2, c: 2 }, { a: 1, b: 3 }, { a: 1, b: 2 }])).to.eql([[{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 2 }], [{ a: 2, c: 2 }]])
        const v = groupByProp('a', [{ a: 1, b: 2 }, { a: 2, c: 2 }, { a: 1, b: 3 }, { a: 1, b: 2 }]);
        expect(v).to.eql([[{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 2 }], [{ a: 2, c: 2 }]])
    });
});
