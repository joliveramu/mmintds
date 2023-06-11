// A Celsius temperature C can be converted to an
// equivalent Fahrenheit temperature F according to
// the following formula: F = (9/5)*C+32


let centigrade = prompt("Enter Celsius: ");

const fahrenheit = ((9/5)*(parseFloat(centigrade) + 32))

alert(`C=${centigrade}\nF=${fahrenheit}`);