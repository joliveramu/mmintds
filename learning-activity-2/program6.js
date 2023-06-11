// Write a JavaScript program that reads in the length
// & width of a rectangle. The program outputs the
// perimeter and area of the rectangle.

let length = prompt("Enter length:");
let width = prompt("Enter width:");

const perimeter = 2 * ( parseFloat(length) + parseFloat(width));
const area = parseFloat(width) * parseFloat(length);
alert(`Perimeter: ${perimeter}\nArea: ${area}`);