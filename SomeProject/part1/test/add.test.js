import { expect } from 'chai';

describe('Library component - add', () => {
    let add;
    before(async () => {
        add = (await import('software-testing-assignment/src/add.js')).default;
    });

    it('should add two integers', () => {
        expect(add(20, 30)).to.equal(50);
    });

    it('should add two decimal numbers', () => {
        expect(add(10.99, 5.01)).to.equal(16.00);
    });

    it('should add negative numbers', () => {
        expect(add(-5, -15)).to.equal(-20);
    });

    it('should add negative and positive decimal numbers', () => {
        expect(add(-2.50, 3.02)).to.equal(0.52);
    });

    it('should handle small decimals', () => {
        expect(add(0.00000000003, 0.00000000002)).to.be.closeTo(0.00000000005, 1e-11);
    });

    it('should add zero to an integer', () => {
        expect(add(0, 10)).to.equal(10);
        expect(add(10, 0)).to.equal(10);
    });

    it('should add zero to a decimal number', () => {
        expect(add(0, 5.75)).to.equal(5.75);
        expect(add(5.75, 0)).to.equal(5.75);
    });

    it('should add very large numbers', () => {
        const largeNumber1 = 1e15;
        const largeNumber2 = 2e15;
        expect(add(largeNumber1, largeNumber2)).to.equal(3e15);
    });

    it('should add very small numbers', () => {
        const smallNumber1 = 1e-15;
        const smallNumber2 = 2e-15;
        expect(add(smallNumber1, smallNumber2)).to.be.closeTo(3e-15, 1e-20);
    });

    it('should handle adding numbers of different types (integer and decimal)', () => {
        expect(add(10, 5.5)).to.equal(15.5);
        expect(add(5.5, 10)).to.equal(15.5);
    });

    it('should add numbers with high precision', () => {
        expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-10);
    });

    it('should add negative and positive integers', () => {
        expect(add(-10, 20)).to.equal(10);
        expect(add(20, -10)).to.equal(10);
    });

    it('should handle NaN inputs and return NaN', () => {
        expect(add(NaN, 5)).to.be.NaN;
        expect(add(5, NaN)).to.be.NaN;
    });

    it('should handle Infinity values', () => {
        expect(add(Infinity, 1)).to.equal(Infinity);
        expect(add(-Infinity, -1)).to.equal(-Infinity);
        expect(add(Infinity, -Infinity)).to.be.NaN;
    });
});