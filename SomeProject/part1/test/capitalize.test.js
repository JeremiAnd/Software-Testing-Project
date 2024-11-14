import { expect } from 'chai';

describe('Library component - capitalize', () => {
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

    it('should handle empty string cases', () => {
        expect(capitalize('')).to.equal('');
    });

    it('should not be confused by abnormal characters', () => {
        expect(capitalize('.')).to.equal('.');
    });

    it('should not change already capitalized words', () => {
        expect(capitalize('Product')).to.equal('Product');
    });

    it('should handle single letter strings', () => {
        expect(capitalize('a')).to.equal('A');
        expect(capitalize('B')).to.equal('B');
    });

    it('should handle strings with leading spaces', () => {
        expect(capitalize('   product')).to.equal('   Product');
    });

    it('should handle strings with trailing spaces', () => {
        expect(capitalize('product   ')).to.equal('Product   ');
    });

    it('should handle strings with mixed casing', () => {
        expect(capitalize('pRoDUct')).to.equal('Product');
    });

    it('should handle non-alphabetic characters only', () => {
        expect(capitalize('12345')).to.equal('12345');
        expect(capitalize('!@#$%')).to.equal('!@#$%');
    });

    it('should handle strings that are all uppercase', () => {
        expect(capitalize('HELLO')).to.equal('HELLO');
    });

    it('should handle strings that are all lowercase', () => {
        expect(capitalize('world')).to.equal('World');
    });

    it('should not change strings that start with numbers', () => {
        expect(capitalize('123 product')).to.equal('123 product');
    });


});