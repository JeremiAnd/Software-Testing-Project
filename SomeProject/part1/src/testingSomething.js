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

// Store structure
const products = [
    { name: "Apple", type: "Fruit", price: 1.2, productContents: "", producer: "Farmers Group" },
    { name: "Banana", type: "Fruit", price: 0.5, productContents: "", producer: "Chiquita" },
    { name: "Carrot", type: "Vegetable", price: 0.8, productContents: "", producer: "Viljanen Oy" },
    { name: "Almond", type: "Nut", price: 1.5, productContents: "", producer: "Leslie's" },
    { name: "Onion", type: "Vegetable", price: 0.75, productContents: "", producer: "Viljanen Oy" }
  ];

  let cart = [];

  export function addProductToCart(productName) {
    const product = products.find(p => p.name === productName);
    if(product) {
        cart.push(product);
        return `${productName} added to cart!`;
    }
    return `Product ${productName} not found!`;
  }

  export function getFilteredProductsByType(type) {
    return filter(products, product => product.type.toLowerCase() === type.toLowerCase());
  }

  export function calculateTotalPrice() {
    return reduce(cart, (total, product) => add(total, product.price), 0);
  }

export function createUser(firstName, lastName, email, sendNewsLetter) {
    return {
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
        email: endsWith(email, '.com') ? email : 'Invalid Email',
        sendNewsLetter: isEmpty(sendNewsLetter) ? true : sendNewsLetter,
    };
}

// adds two numbers together
export function sumNumbers(a, b) {
    return add(a, b);
}

export function getNestedProperty(obj, path, defaultValue) {
    return get(obj, path, defaultTo(defaultValue, 'Default Value'));
}

export function filterProductsByCategory(products, category) {
    return filter(products, product => product.category === category);
}

export function capitalizeProductNames(products) {
    return map(products, product => capitalize(product.name));
}

export function applyDefault(value, defaultValue) {
    return defaultTo(value, defaultValue);
}

export function validateBoolean(value) {
    return isBoolean(value);
}