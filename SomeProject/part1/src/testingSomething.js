import capitalize from 'software-testing-assignment/src/capitalize';
import add from 'software-testing-assignment/src/add';
import get from 'software-testing-assignment/src/get';
import filter from 'software-testing-assignment/src/filter';
import reduce from 'software-testing-assignment/src/reduce';
import map from 'software-testing-assignment/src/map';
import defaultTo from 'software-testing-assignment/src/defaultTo';
import isEmpty from 'software-testing-assignment/src/isEmpty';
import isBoolean from 'software-testing-assignment/src/isBoolean';
import endsWith from 'software-testing-assignment/src/endsWith';

const testingSomething = {
    // User creation function
    createUser: (firstName, lastName, email, sendNewsLetter) => {
      const finalFirstName = capitalize(defaultTo(firstName, 'John'));
      const finalLastName = capitalize(defaultTo(lastName, 'Doe'));
  
      if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email)) {
        throw new Error("All fields (first name, last name, email) are required.");
      }
      if (!email.includes('@') || !endsWith(email, '.com')) {
        throw new Error("Email should contain '@' and end with '.com'.");
      }
      if (!isBoolean(sendNewsLetter)) {
        throw new Error("Send newsletter must be a boolean.");
      }
  
      return {
        firstName: finalFirstName,
        lastName: finalLastName,
        email,
        sendNewsLetter,
      };
    },
  
    // Product addition function
    addProduct: (products, product) => {
      const { name, type, price, productContents, producer } = product;
  
      if (isEmpty(name) || isEmpty(type) || price === undefined) {
        throw new Error("Product name, type, and price are required.");
      }
  
      return [
        ...products,
        { name, type, price, productContents, producer },
      ];
    },
  
    // Filter products by type
    filterProductsByType: (products, type) => {
      return filter(products, (product) => product.type.toLowerCase() === type.toLowerCase());
    },
  
    // Calculate total price in cart
    calculateTotalCartPrice: (cart) => {
      return reduce(cart, (total, item) => add(total, item.price), 0);
    },
  
    // Search products by type and return capitalized names
    searchProductsByType: (products, type) => {
      const filteredProducts = filter(products, (product) => product.type === type);
      return map(filteredProducts, (product) => capitalize(product.name));
    },
    
    getProductDetails: (product, path, defaultValue = 'N/A') => {
    return get(product, path, defaultValue);
    }
  };
  
  // Example usage (for testing purposes)
  const products = [
    { name: "Apple", type: "Fruit", price: 1.2, productContents: "", producer: "Farmers Group" },
    { name: "Banana", type: "Fruit", price: 0.5, productContents: "", producer: "Chiquita" },
    { name: "Carrot", type: "Vegetable", price: 0.8, productContents: "", producer: "Viljanen Oy" },
  ];
  
  try {
    const newUser = testingSomething.createUser("John", "", "john.doe@gmail.com", true);
    console.log("Created User:", newUser);
  
    const updatedProducts = testingSomething.addProduct(products, {
      name: "Orange",
      type: "Fruit",
      price: 1.0,
      productContents: "",
      producer: "Citrus Co.",
    });
    console.log("Updated Products:", updatedProducts);
  
    const filteredFruits = testingSomething.filterProductsByType(products, "Fruit");
    console.log("Filtered Fruits:", filteredFruits);
  
    const totalCartPrice = testingSomething.calculateTotalCartPrice(filteredFruits);
    console.log("Total Cart Price:", totalCartPrice);
  
    const productNames = testingSomething.searchProductsByType(products, "Fruit");
    console.log("Capitalized Product Names:", productNames);
  } catch (error) {
    console.error("Error:", error.message);
  }
  
  export default testingSomething;