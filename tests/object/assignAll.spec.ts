import 'mocha';
import { expect } from 'chai';
import { assignAllLeft } from '../../src/object/assignAllLeft'
import { assignAllRight } from '../../src/object/assignAllRight'

describe('assignAllLeft & assignAllRight', () => {

    it('assignAllLeft should return object', () => {
        const obj1 = { a: 1, b: 'v', c: [1, 2, 3] }
        const obj2 = { a: 3, p: 'v' }
        const f = assignAllLeft; //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
        expect(f([obj1, obj2])).to.eql({ a: 1, b: 'v', c: [1, 2, 3], p: 'v' })
    });
    it('assignAllRight should return object', () => {
        const obj1 = { a: 1, b: 'v', c: [1, 2, 3] }
        const obj2 = { a: 3, p: 'v' }
        const f = assignAllRight; //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
        expect(f([obj1, obj2])).to.eql({ a: 1, b: 'v', c: [1, 2, 3], p: 'v' })
    });

});
