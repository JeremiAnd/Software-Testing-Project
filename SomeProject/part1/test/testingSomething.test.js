// testingSomething.test.js
import { expect } from 'chai';
import {createUser} from '../src/testingSomething.js';
//TESTING
describe('createUser', () => {
    
    it('should create a user with capitalized names and valid email', () => {
        const user = createUser('john', 'doe', 'john.doe@gmail.com', true);
        expect(user.firstName).to.equal('John');
        expect(user.lastName).to.equal('Doe');
        expect(user.email).to.equal('john.doe@gmail.com');
        expect(user.sendNewsLetter).to.be.true;
      });
    
      it('should return "Invalid Email" if email does not end with .com', () => {
        const user = createUser('John', 'Doe', 'john.doe@domain', true);
        expect(user.email).to.equal('Invalid Email');
      });
});