import capitalize from 'software-testing-assignment/src/capitalize.js';
import add from 'software-testing-assignment/src/add.js';
import get from 'software-testing-assignment/src/get.js';
import filter from 'software-testing-assignment/src/filter.js';
import reduce from 'software-testing-assignment/src/reduce.js';
import map from 'software-testing-assignment/src/map.js';
import defaultTo from 'software-testing-assignment/src/defaultTo.js';
import isEmpty from 'software-testing-assignment/src/isEmpty.js';
import isBoolean from 'software-testing-assignment/src/isBoolean.js';
import endsWith from 'software-testing-assignment/src/endsWith.js';
//TESTING
export function createUser(firstName, lastName, email, sendNewsLetter) {
    return {
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
        email: endsWith(email, '.com') ? email : 'Invalid Email',
        sendNewsLetter: isEmpty(sendNewsLetter) ? true : sendNewsLetter,
    };
}