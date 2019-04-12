/* INSTRUCTIONS*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
const products = [
    {
        name : bread,
        inventory : 204,
        unit_price : 1.95
    },
    {
        name : cheese,
        inventory : 125,
        unit_price : 3.95
    },
    {
        name : peperoni,
        inventory : 347,
        unit_price : 2.37
    }
]

function listProducts(products) {
        return products.name;
}
console.log(listProducts(products));

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.


// 4. Call the listProducts() function and log the returned value to the console.


// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value


// 6. Call the totalValue() function and log the returned value to the console.


// 7. Run your code by typing node 3_final_products.js in the console below