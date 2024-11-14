import { expect } from 'chai';

describe('Library component - defaultTo', () => {
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

    it('should handle string input types too with null input', () => {
        expect(defaultTo(null, "default")).to.equal("default");
    });

    it('should handle string input types too with non-null input', () => {
        expect(defaultTo("input string", "default")).to.equal("input string");
    });

    it('should return default value if input is NaN', () => {
        expect(defaultTo(NaN, 100)).to.equal(100);
    });

    it('should return actual value if input is 0', () => {
        expect(defaultTo(0, 100)).to.equal(0);
    });

    it('should return actual value if input is an empty string', () => {
        expect(defaultTo("", "default")).to.equal("");
    });

    it('should handle boolean false as a valid value', () => {
        expect(defaultTo(false, true)).to.equal(false);
    });

    it('should handle boolean true as a valid value', () => {
        expect(defaultTo(true, false)).to.equal(true);
    });

    it('should handle arrays and return the array if it is not null or undefined', () => {
        expect(defaultTo([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3]);
    });

    it('should return default array if input array is null', () => {
        expect(defaultTo(null, [4, 5, 6])).to.deep.equal([4, 5, 6]);
    });

    it('should handle objects and return the object if it is not null or undefined', () => {
        expect(defaultTo({ key: 'value' }, { defaultKey: 'defaultValue' })).to.deep.equal({ key: 'value' });
    });

    it('should return default object if input object is null', () => {
        expect(defaultTo(null, { defaultKey: 'defaultValue' })).to.deep.equal({ defaultKey: 'defaultValue' });
    });

    it('should return default value for explicitly undefined variables', () => {
        let undefinedVariable;
        expect(defaultTo(undefinedVariable, 100)).to.equal(100);
    });

    it('should return default value for explicitly null variables', () => {
        let nullVariable = null;
        expect(defaultTo(nullVariable, 100)).to.equal(100);
    });
});