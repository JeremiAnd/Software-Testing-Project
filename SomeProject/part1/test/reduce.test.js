import { expect } from 'chai';

describe('Library component - reduce', () => {
    let reduce;
    before(async () => {
        reduce = (await import('software-testing-assignment/src/reduce.js')).default;
    });

    it('should sum up numbers in an array', () => {
        const numbers = [10, 20, 30];
        const sum = reduce(numbers, (acc, num) => acc + num, 0);
        expect(sum).to.equal(60);
    });

    it('should return 0 for empty array', () => {
        const numbers = [];
        const sum = reduce(numbers, (acc, num) => acc + num, 0);
        expect(sum).to.equal(0);
    });

    it('should handle multiply operations', () => {
        const numbers = [2, 2, 2, -2];
        const sum = reduce(numbers, (acc, num) => acc * num, 1);
        expect(sum).to.equal(-16);
    });

    it('should concatenate strings in an array', () => {
        const strings = ['Hello', ' ', 'World', '!'];
        const result = reduce(strings, (acc, str) => acc + str, '');
        expect(result).to.equal('Hello World!');
    });

    it('should handle reducing an array of objects to a single value', () => {
        const items = [
            { name: 'Apple', quantity: 10 },
            { name: 'Banana', quantity: 5 },
            { name: 'Orange', quantity: 15 },
        ];
        const totalQuantity = reduce(items, (acc, item) => acc + item.quantity, 0);
        expect(totalQuantity).to.equal(30);
    });

    it('should return the initial value if the array is empty', () => {
        const numbers = [];
        const result = reduce(numbers, (acc, num) => acc + num, 100);
        expect(result).to.equal(100);
    });

    it('should handle reducing without an initial value (use first element as initial value)', () => {
        const numbers = [10, 20, 30];
        const result = reduce(numbers, (acc, num) => acc + num);
        expect(result).to.equal(60);
    });

    it('should handle boolean operations', () => {
        const values = [true, false, true];
        const allTrue = reduce(values, (acc, val) => acc && val, true);
        expect(allTrue).to.be.false;
    });

    it('should flatten a nested array', () => {
        const nestedArray = [[1, 2], [3, 4], [5]];
        const flattened = reduce(nestedArray, (acc, arr) => acc.concat(arr), []);
        expect(flattened).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should count the occurrences of elements in an array', () => {
        const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
        const count = reduce(letters, (acc, letter) => {
            acc[letter] = (acc[letter] || 0) + 1;
            return acc;
        }, {});
        expect(count).to.deep.equal({ a: 3, b: 2, c: 1 });
    });

    it('should handle reducing an array to the minimum value', () => {
        const numbers = [10, 20, 5, 15];
        const min = reduce(numbers, (acc, num) => (num < acc ? num : acc), numbers[0]);
        expect(min).to.equal(5);
    });

    it('should handle reducing an array to the maximum value', () => {
        const numbers = [10, 20, 5, 15];
        const max = reduce(numbers, (acc, num) => (num > acc ? num : acc), numbers[0]);
        expect(max).to.equal(20);
    });
});