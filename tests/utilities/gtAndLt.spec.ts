import 'mocha';
import { expect } from 'chai';
import { gt } from './../../src/utilities/gt';
import { lt } from './../../src/utilities/lt';

describe('gt & lt', () => {

    describe('gt', () => {
        it('should returns when false', () => {
            expect(gt(3, 7)).to.equal(false);
        });
        it('should returns when true', () => {
            expect(gt('vanilla')('js')).to.equal(true);
        });
    });
    describe('lt', () => {
        it('should returns when true', () => {
            expect(lt(3, 7)).to.equal(true);
        });
        it('should returns when false', () => {
            expect(lt('vanilla')('js')).to.equal(false);
        });
    });
});
