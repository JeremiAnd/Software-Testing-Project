import { expect } from 'chai';

describe('Library component - get', () => {
    let get;
    before(async () => {
        get = (await import('software-testing-assignment/src/get.js')).default;
    });

    it('should get nested property value from object', () => {
        const data = { product: { name: 'Apple' } };
        expect(get(data, 'product.name')).to.equal('Apple');
    });

    it('should return default value if path does not exist', () => {
        const data = { product: { name: 'Apple' } };
        expect(get(data, 'product.price', 'No price')).to.equal('No price');
    });

    it('should handle deep nested paths correctly', () => {
        const data = { a: { b: { c: { d: 'deep value' } } } };
        expect(get(data, 'a.b.c.d')).to.equal('deep value');
    });

    it('should return undefined if path does not exist and no default value is provided', () => {
        const data = { product: { name: 'Apple' } };
        expect(get(data, 'product.price')).to.be.undefined;
    });

    it('should handle arrays and return the correct value', () => {
        const data = { items: ['Apple', 'Banana', 'Cherry'] };
        expect(get(data, 'items[1]')).to.equal('Banana');
    });

    it('should handle mixed objects and arrays in path', () => {
        const data = { products: [{ name: 'Apple' }, { name: 'Banana' }] };
        expect(get(data, 'products[1].name')).to.equal('Banana');
    });

    it('should return default value for an invalid array index', () => {
        const data = { items: ['Apple', 'Banana'] };
        expect(get(data, 'items[5]', 'Out of bounds')).to.equal('Out of bounds');
    });

    it('should return default value for null object', () => {
        const data = null;
        expect(get(data, 'product.name', 'Default')).to.equal('Default');
    });

    it('should return default value for undefined object', () => {
        const data = undefined;
        expect(get(data, 'product.name', 'Default')).to.equal('Default');
    });

    it('should handle paths with special characters', () => {
        const data = { 'weird.key': { 'another.key': 'value' } };
        expect(get(data, 'weird\\.key.another\\.key')).to.be.undefined;
    });

    it('should return the original object if an empty path is given', () => {
        const data = { product: { name: 'Apple' } };
        expect(get(data, '', 'Fallback')).to.deep.equal('Fallback');
    });

    it('should return the default value if an empty path is given and object is null', () => {
        const data = null;
        expect(get(data, '', 'Default')).to.equal('Default');
    });

    it('should return undefined for a non-object or non-array value with a path', () => {
        const data = 'string value';
        expect(get(data, 'some.path')).to.be.undefined;
    });

    it('should handle objects with numeric keys', () => {
        const data = { 123: { name: 'Numeric Key' } };
        expect(get(data, '123.name')).to.equal('Numeric Key');
    });

    it('should handle function values at the path', () => {
        const data = { getValue: () => 'Function result' };
        expect(get(data, 'getValue')()).to.equal('Function result');
    });
});