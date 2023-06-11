// A Fahrenheit temperature F can be converted to an
// equivalent Celsius temperature C according to the
// following formula: C = (F - 32) * 5/9.

let fahrenheit = prompt("Enter Fahrenheit: ");

let centigrade = (fahrenheit - 32) * (5/9);

alert(`F=${fahrenheit}\nC=${centigrade}`);