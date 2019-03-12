import 'mocha';
import { expect } from 'chai';
import { pipe } from '../../src/utilities/pipe'

describe('pipe', () => {

    it('should return value', () => {
        const inc = (a) => a + 1;
        const f = pipe(Number, inc, inc)
        expect(f('6')).to.equal(8);
    });
});
