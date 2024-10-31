import { expect } from 'chai';

describe('add', () => {
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
});