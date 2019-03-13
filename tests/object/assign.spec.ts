import 'mocha';
import { expect } from 'chai';
import { assignLeft } from '../../src/object/assignLeft'
import { assignRight } from '../../src/object/assignRight'

describe('assignLeft & assignRight', () => {

    it('assignLeft should return object', () => {
        const obj1 = { a: 1, b: 'v', c: [1, 2, 3] }
        const obj2 = { a: 3, p: 'v' }
        const f = assignLeft(obj1); //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
        expect(f(obj2)).to.eql({ a: 1, b: 'v', c: [1, 2, 3], p: 'v' })
    });
    it('assignRight should return object', () => {
        const obj1 = { a: 1, b: 'v', c: [1, 2, 3] }
        const obj2 = { a: 3, p: 'v' }
        const f = assignRight; //=> { a: 1, b: 'v', c: [ 1, 2, 3 ], p: 'v' }
        expect(f(obj1, obj2)).to.eql({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })
    });

});
