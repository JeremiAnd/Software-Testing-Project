import { expect } from 'chai';

describe('capitalize', () => {
    let capitalize;
    before(async () => {
        capitalize = (await import('software-testing-assignment/src/capitalize.js')).default;
    });

    it('should capitalize a single word', () => {
        expect(capitalize('product')).to.equal('Product');
    });

    it('should capitalize first word in a sentence', () => {
        expect(capitalize('hello world')).to.equal('Hello world');
    });
});