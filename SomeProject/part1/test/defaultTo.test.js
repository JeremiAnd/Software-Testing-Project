import { expect } from 'chai';

describe('defaultTo', () => {
    let defaultTo;
    before(async () => {
        defaultTo = (await import('software-testing-assignment/src/defaultTo.js')).default;
    });

    it('should return default value if input is undefined', () => {
        expect(defaultTo(undefined, 100)).to.equal(100);
    });
    
    it('should return default value if input is null', () => {
        expect(defaultTo(null, 100)).to.equal(100);
    });
    
    it('should return actual value if input is not null or undefined', () => {
        expect(defaultTo(50, 100)).to.equal(50);
    });
});