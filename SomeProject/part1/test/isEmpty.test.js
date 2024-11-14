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

    it('should return true for null', () => {
        expect(isEmpty(null)).to.be.true;
    });

    it('should return true for undefined', () => {
        expect(isEmpty(undefined)).to.be.true;
    });

    it('should return true for an empty array', () => {
        expect(isEmpty([])).to.be.true;
    });

    it('should return false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).to.be.false;
    });

    it('should return true for an empty object', () => {
        expect(isEmpty({})).to.be.true;
    });

    it('should return false for a non-empty object', () => {
        expect(isEmpty({ key: 'value' })).to.be.false;
    });

    it('should return true for an empty Set', () => {
        expect(isEmpty(new Set())).to.be.true;
    });

    it('should return false for a non-empty Set', () => {
        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).to.be.false;
    });

    it('should return true for an empty Map', () => {
        expect(isEmpty(new Map())).to.be.true;
    });

    it('should return false for a non-empty Map', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).to.be.false;
    });

    it('should return true for a function with no properties', () => {
        const func = function () { };
        expect(isEmpty(func)).to.be.true;
    });

    it('should return false for a function with properties', () => {
        const func = function () { };
        func.property = 'value';
        expect(isEmpty(func)).to.be.false;
    });

    it('should return true for an empty Buffer', () => {
        const buffer = Buffer.alloc(0);
        expect(isEmpty(buffer)).to.be.true;
    });

    it('should return false for a non-empty Buffer', () => {
        const buffer = Buffer.from([1, 2, 3]);
        expect(isEmpty(buffer)).to.be.false;
    });


});