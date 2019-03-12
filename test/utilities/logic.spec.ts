import 'mocha';
import { expect } from 'chai';
import { and } from './../../src/utilities/and';
import { or } from './../../src/utilities/or';
import { not } from './../../src/utilities/not';

describe('logic', () => {

    describe('and', () => {
        it('should returns when false', () => {
            expect(and(true, false)).to.equal(false);
        });
        it('should returns when true', () => {
            expect(and(true)(true)).to.equal(true);
        });
        it('should returns when false', () => {
            expect(and(false, false)).to.equal(false);
        });
    });
    describe('or', () => {
        it('should returns when false', () => {
            expect(or(true, false)).to.equal(true);
        });
        it('should returns when true', () => {
            expect(or(true)(true)).to.equal(true);
        });
        it('should returns when false', () => {
            expect(or(false, false)).to.equal(false);
        });
    });
    describe('not', () => {
        it('should returns when false', () => {
            expect(not(false)).to.equal(true);
        });
        it('should returns when true', () => {
            expect(not(true)).to.equal(false);
        });
    });
});
