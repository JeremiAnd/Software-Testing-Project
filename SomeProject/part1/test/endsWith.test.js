import { expect } from 'chai';

describe('Library component - endsWith', () => {
    let endsWith;
    before(async () => {
        endsWith = (await import('software-testing-assignment/src/endsWith.js')).default;
    });

    it('should return false if string does not end with specified suffix', () => {
        expect(endsWith("yksi.kaksi@foo.bar", ".com")).to.be.false;
    });

    it('should return true if string does end with specified suffix', () => {
        expect(endsWith("yksi.kaksi@gmail.com", ".com")).to.be.true;
    });

    it('should handle normal strings', () => {
        expect(endsWith("input", "t")).to.be.true;
    });

    it('should return false if the string is shorter than the suffix', () => {
        expect(endsWith("hi", "hello")).to.be.false;
    });

    it('should return true if the string ends with a single character suffix', () => {
        expect(endsWith("apple", "e")).to.be.true;
    });

    it('should return true if both the string and suffix are identical', () => {
        expect(endsWith("test", "test")).to.be.true;
    });

    it('should be case-sensitive and return false if cases do not match', () => {
        expect(endsWith("HelloWorld", "world")).to.be.false;
    });

    it('should return true if the string ends with a multi-character suffix', () => {
        expect(endsWith("testing.js", ".js")).to.be.true;
    });

    it('should handle strings with special characters', () => {
        expect(endsWith("path/to/file.txt", ".txt")).to.be.true;
    });

    it('should return false if the suffix appears in the string but not at the end', () => {
        expect(endsWith("this.is.a.test", "is")).to.be.false;
    });

    it('should return true for empty string and empty suffix', () => {
        expect(endsWith("", "")).to.be.true;
    });

    it('should return true if suffix is an empty string', () => {
        expect(endsWith("nonempty", "")).to.be.true;
    });

    it('should handle numeric suffixes correctly', () => {
        expect(endsWith("version2", "2")).to.be.true;
    });

    it('should return false if numeric suffix does not match the end', () => {
        expect(endsWith("version1", "2")).to.be.false;
    });

    it('should return false for null input and valid suffix', () => {
        expect(endsWith(null, "suffix")).to.be.false;
    });

    it('should return false for valid input and null suffix', () => {
        expect(endsWith("string", null)).to.be.false;
    });
});