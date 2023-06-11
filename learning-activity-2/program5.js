// A class has four exams in one term. Write a
// JavaScript program using a sequence structure that
// reads in a student’s four exam scores and outputs
// the student’s average.

let i = 0; 
let sum = 0;
let noOfExams = 4;
while(i < noOfExams)
{
	let input = prompt(`Enter grade for exam # ${i+1}`);
	sum = sum + parseFloat(input);
	i++;
}
let average = sum / noOfExams;
alert(`The average of ${noOfExams} Exams is ${average}`);