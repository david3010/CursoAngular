import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [];

shoppingCart.push({
    description: 'Samsung Galaxy S10',
    price: 500
});

console.log(shoppingCart);

taxCalculation({ tax: 0.16, products: shoppingCart }); // Total: 500, Tax: 80