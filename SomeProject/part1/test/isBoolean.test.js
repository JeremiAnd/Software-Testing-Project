import { expect } from 'chai';

describe('Library component - isBoolean', () => {
    let isBoolean;
    before(async () => {
        isBoolean = (await import('software-testing-assignment/src/isBoolean.js')).default;
    });

    it('should return true if value is true', () => {
        expect(isBoolean(true)).to.be.true;
    });

    it('should return true if value is false', () => {
        expect(isBoolean(false)).to.be.true;
    });

    it('should return false if value is not boolean', () => {
        expect(isBoolean("hello")).to.be.false;
    });

    it('should return false for a number', () => {
        expect(isBoolean(123)).to.be.false;
    });

    it('should return false for an object', () => {
        expect(isBoolean({})).to.be.false;
    });

    it('should return false for an array', () => {
        expect(isBoolean([])).to.be.false;
    });

    it('should return false for a null value', () => {
        expect(isBoolean(null)).to.be.false;
    });

    it('should return false for an undefined value', () => {
        expect(isBoolean(undefined)).to.be.false;
    });

    it('should return false for a string representation of true', () => {
        expect(isBoolean("true")).to.be.false;
    });

    it('should return false for a string representation of false', () => {
        expect(isBoolean("false")).to.be.false;
    });

    it('should return false for a function', () => {
        expect(isBoolean(() => { })).to.be.false;
    });

    it('should return false for a symbol', () => {
        expect(isBoolean(Symbol('boolean'))).to.be.false;
    });

    it('should return false for BigInt values', () => {
        expect(isBoolean(123n)).to.be.false;
    });
});