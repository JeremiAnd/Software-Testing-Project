import { expect } from 'chai';

describe('Library component - filter', () => {
    let filter;
    before(async () => {
        filter = (await import('software-testing-assignment/src/filter.js')).default;
    });

    it('should filter array of objects based on condition', () => {
        const items = [
            { name: 'Apple', category: 'Fruit' },
            { name: 'Carrot', category: 'Vegetable' },
        ];
        const result = filter(items, (item) => item.category === 'Fruit');
        expect(result).to.deep.equal([{ name: 'Apple', category: 'Fruit' }]);
    });

    it('should return an empty array if no items match the condition', () => {
        const items = [
            { name: 'Apple', category: 'Fruit' },
            { name: 'Carrot', category: 'Vegetable' },
        ];
        const result = filter(items, (item) => item.category === 'Meat');
        expect(result).to.deep.equal([]);
    });

    it('should return the original array if all items match the condition', () => {
        const items = [
            { name: 'Apple', category: 'Fruit' },
            { name: 'Banana', category: 'Fruit' },
        ];
        const result = filter(items, (item) => item.category === 'Fruit');
        expect(result).to.deep.equal(items);
    });

    it('should handle an empty array and return an empty array', () => {
        const items = [];
        const result = filter(items, (item) => item.category === 'Fruit');
        expect(result).to.deep.equal([]);
    });

    it('should filter numbers from an array correctly', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (num) => num > 3);
        expect(result).to.deep.equal([4, 5]);
    });

    it('should filter strings from an array correctly', () => {
        const strings = ['apple', 'banana', 'cherry'];
        const result = filter(strings, (str) => str.startsWith('b'));
        expect(result).to.deep.equal(['banana']);
    });

    it('should handle complex conditions for filtering', () => {
        const items = [
            { name: 'Apple', category: 'Fruit', price: 1.2 },
            { name: 'Carrot', category: 'Vegetable', price: 0.8 },
            { name: 'Banana', category: 'Fruit', price: 1.0 },
        ];
        const result = filter(items, (item) => item.category === 'Fruit' && item.price > 1.0);
        expect(result).to.deep.equal([{ name: 'Apple', category: 'Fruit', price: 1.2 }]);
    });

    it('should handle arrays with mixed data types and filter based on type', () => {
        const mixedArray = [1, 'apple', { name: 'Carrot' }, true, 42];
        const result = filter(mixedArray, (item) => typeof item === 'number');
        expect(result).to.deep.equal([1, 42]);
    });

    it('should handle cases where the filter function always returns true', () => {
        const items = [1, 2, 3, 4];
        const result = filter(items, () => true);
        expect(result).to.deep.equal(items);
    });

    it('should handle cases where the filter function always returns false', () => {
        const items = [1, 2, 3, 4];
        const result = filter(items, () => false);
        expect(result).to.deep.equal([]);
    });

    it('should handle null or undefined values in the array gracefully', () => {
        const items = [null, undefined, { name: 'Apple', category: 'Fruit' }];
        const result = filter(items, (item) => item && item.category === 'Fruit');
        expect(result).to.deep.equal([{ name: 'Apple', category: 'Fruit' }]);
    });


});