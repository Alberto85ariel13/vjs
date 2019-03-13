import 'mocha';
import { expect } from 'chai';
import { applySpec } from '../../src/object/applySpec'
import { prop } from '../../src/object/prop'
import { concat } from '../../src/array/concat'
import { reduce } from '../../src/array/reduce'
import { compose } from '../../src/utilities/compose'
import { add } from '../../src/math/add'

describe('applySpec', () => {

    it('should return object', () => {
        const mapping = {
            a: compose(add(5), prop('a')),
            b: compose(concat('anilla'), prop('b')),
            c: {
                r: compose(reduce((a, b) => a + b, 0), prop('c'))
            }
        }
        const f = applySpec(mapping)
        expect(f({ a: 3, b: 'v', c: [1, 2, 3], p: 'v' })).to.eql({ a: 8, b: 'vanilla', c: { r: 6 } })
    });

});
