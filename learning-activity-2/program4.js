// Write a JavaScript program that reads in two
// integers and then outputs their sum, difference,
// and product.

let var1 = prompt("Enter first number: ");
let var2 = prompt("Enter second number: ");

const sum = parseInt(var1) + parseInt(var2);
const difference = parseInt(var1) - parseInt(var2);
const product = parseInt(var1) * parseInt(var2);

alert(`First value = ${var1}\nSecond value = ${var2}\nSum: ${sum}\nDifference: ${difference}\nProduct: ${product}`)