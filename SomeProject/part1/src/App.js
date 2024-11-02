import React, { useState } from 'react';
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

const App = () => {
  // Replace any JSX elements with React.createElement
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sendNewsLetter: false,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const [cart, setCart] = useState([]);
  const [products] = useState([
    { name: 'Apple', type: 'Fruit', price: 1.2 },
    { name: 'Banana', type: 'Fruit', price: 0.5 },
  ]);

  const handleUserCreation = () => {
    const finalFirstName = capitalize(defaultTo(user.firstName, 'John'));
    const finalLastName = capitalize(defaultTo(user.lastName, 'Doe'));
    if (isEmpty(user.email) || !endsWith(user.email, '.com')) {
      alert('Email is required and should end with .com');
      return;
    }
    setUser({ ...user, firstName: finalFirstName, lastName: finalLastName });
    setSuccessMessage(`User created: ${finalFirstName} ${finalLastName}`);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalCartPrice = reduce(cart, (acc, product) => add(acc, product.price), 0);

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'E-commerce store'),
    successMessage && React.createElement('p', null, successMessage),
    React.createElement(
      'section',
      null,
      React.createElement('input', {
        placeholder: 'first name',
        value: user.firstName,
        onChange: (e) => setUser({ ...user, firstName: e.target.value }),
      }),
      React.createElement('input', {
        placeholder: 'last name',
        value: user.lastName,
        onChange: (e) => setUser({ ...user, lastName: e.target.value }),
      }),
      React.createElement('input', {
        placeholder: 'email',
        value: user.email,
        onChange: (e) => setUser({ ...user, email: e.target.value }),
      }),
      React.createElement('input', {
        type: 'checkbox',
        checked: user.sendNewsLetter,
        onChange: (e) => setUser({ ...user, sendNewsLetter: e.target.checked}),
      }),
      'Subscribe to newsletter',
      React.createElement(
        'button',
        { onClick: handleUserCreation },
        'Create User'
      )
    ),
    React.createElement(
      'section',
      null,
      React.createElement('h2', null, 'Available Products'),
      products.map((product, index) =>
        React.createElement(
          'div',
          { key: index },
          `${product.name} - $${product.price.toFixed(2)}`,
          React.createElement(
            'button',
            { onClick: () => addToCart(product) },
            'Add to cart'
          )
        )
      )
    ),
    React.createElement(
      'section',
      null,
      React.createElement('h2', null, 'Shopping Cart'),
      cart.map((item, index) =>
        React.createElement(
          'div',
          { key: index },
          `${item.name} - $${item.price.toFixed(2)}`
        )
      ),
      React.createElement('h3', null, `Total: $${totalCartPrice.toFixed(2)}`)
    )
  );
};

export default App;