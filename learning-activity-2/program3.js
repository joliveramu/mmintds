// Write a JavaScript program that will input the
// grades of ten students and output their class
// average.

let i = 0; 
let sum = 0;
let noOfStudents = 10;
while(i < noOfStudents)
{
	let input = prompt(`Enter grade for student # ${i+1}`);
	sum = sum + parseFloat(input);
	i++;
}
let average = sum / noOfStudents;
alert(`The average of ${noOfStudents} is ${average}`);