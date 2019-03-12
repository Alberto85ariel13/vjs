import 'mocha';
import { expect } from 'chai';
import { push } from './../../src/array/push';

describe('push', () => {

    it('should return array', () => {
        const f = push(['n', 'l']);
        expect(f(['v', 'a'])).to.eql(['v', 'a', 'n', 'l'])
    });

});
