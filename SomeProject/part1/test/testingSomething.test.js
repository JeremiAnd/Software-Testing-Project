// testingSomething.test.js
import { expect } from 'chai';
import capitalize from 'software-testing-assignment/src/capitalize.js';
import testingSomething from '../src/testingSomething.js'
describe('testingSomething', () => {
    
  it('should create a user with capitalized names and valid email', () => {
    const user = testingSomething.createUser('john', 'doe', 'john.doe@gmail.com', true);
    expect(user.firstName).to.equal('John');
    expect(user.lastName).to.equal('Doe');
    expect(user.email).to.equal('john.doe@gmail.com');
    expect(user.sendNewsLetter).to.be.true;
  });

  // Add other tests for the rest of the functions in testingSomething.js
});