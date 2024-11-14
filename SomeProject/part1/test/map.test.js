import { expect } from 'chai';

describe('Library component - map', () => {
    let map;
    before(async () => {
        map = (await import('software-testing-assignment/src/map.js')).default;
    });

    it('should apply transformation to each element in an array', () => {
        const products = [{ price: 100 }, { price: 50 }];
        const result = map(products, (product) => ({ price: product.price * 0.9 }));
        expect(result).to.deep.equal([{ price: 90 }, { price: 45 }]);
    });

    it('should handle an empty array and return an empty array', () => {
        const result = map([], (item) => item * 2);
        expect(result).to.deep.equal([]);
    });

    it('should correctly apply a transformation function to a numeric array', () => {
        const numbers = [1, 2, 3, 4];
        const result = map(numbers, (num) => num * 2);
        expect(result).to.deep.equal([2, 4, 6, 8]);
    });

    it('should return an array of the same length as the input array', () => {
        const items = [1, 2, 3];
        const result = map(items, (item) => item + 1);
        expect(result.length).to.equal(items.length);
    });

    it('should apply a transformation function that returns a different data type', () => {
        const numbers = [1, 2, 3];
        const result = map(numbers, (num) => `Number: ${num}`);
        expect(result).to.deep.equal(['Number: 1', 'Number: 2', 'Number: 3']);
    });

    it('should handle an array of strings and apply a transformation function', () => {
        const strings = ['a', 'b', 'c'];
        const result = map(strings, (str) => str.toUpperCase());
        expect(result).to.deep.equal(['A', 'B', 'C']);
    });

    it('should correctly transform an array of objects', () => {
        const people = [{ name: 'John' }, { name: 'Jane' }];
        const result = map(people, (person) => ({ ...person, active: true }));
        expect(result).to.deep.equal([{ name: 'John', active: true }, { name: 'Jane', active: true }]);
    });

    it('should handle complex transformation functions', () => {
        const items = [2, 4, 6];
        const result = map(items, (num, index) => num + index);
        expect(result).to.deep.equal([2, 5, 8]);
    });

    it('should not mutate the original array', () => {
        const numbers = [1, 2, 3];
        const copy = [...numbers];
        map(numbers, (num) => num * 2);
        expect(numbers).to.deep.equal(copy);
    });

    it('should handle transformation functions that produce undefined values', () => {
        const items = [1, 2, 3];
        const result = map(items, () => undefined);
        expect(result).to.deep.equal([undefined, undefined, undefined]);
    });

    it('should handle arrays with null and undefined values', () => {
        const items = [null, undefined, 5];
        const result = map(items, (item) => (item == null ? 'empty' : item * 2));
        expect(result).to.deep.equal(['empty', 'empty', 10]);
    });

    it('should work with a transformation function that uses an external variable', () => {
        const multiplier = 3;
        const numbers = [1, 2, 3];
        const result = map(numbers, (num) => num * multiplier);
        expect(result).to.deep.equal([3, 6, 9]);
    });
});