import { expect } from 'chai';

describe('Library component - isEmpty', () => {
    let isEmpty;
    before(async () => {
        isEmpty = (await import('software-testing-assignment/src/isEmpty.js')).default;
    });

    it('should return true for an empty value', () => {
        expect(isEmpty("")).to.be.true;
    });
    
    it('should return false for a non-empty string', () => {
        expect(isEmpty("Apple")).to.be.false;
    });
});