import 'mocha';
import { expect } from 'chai';
import { compose } from '../../src/utilities/compose'

describe('compose', () => {

    it('should return value', () => {
        const inc = (a) => a + 1;
        const f = compose(inc, inc, Number)
        expect(f('6')).to.equal(8);
    });
});
