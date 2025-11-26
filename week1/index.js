// index.js 
const prompt = require('prompt-sync')(); // This line is essential 
console.log("starting") 
//Input numbers
const num1 = parseInt(prompt('Enter your number 1: ')); 
console.log(`Number 1 is ${num1}`); 
const num2 = parseInt(prompt('Enter your number 2: ')); 
console.log(`Number 2 is ${num2}`);  

// add 2 numbers
const sum= num1 + num2 ;
// display the sum
console.log('The sum of ' + num1 +' and ' + num2 + ' is: ' + sum); 
//subcription for 2 numbers
const subtraction = num1 - num2;
//Display the subcription 
console.log('The result of subtracting ' + num2 + ' from ' + num1 + ' is: ' + subtraction);
// Multiplication for the 2 numbers
const multiplication = num1 * num2;
// display the result
console.log('The product of ' + num1 + ' and ' + num2 + ' is: ' + multiplication);
// division for the 3 numbers 
const division = num1 / num2;
// display the result
console.log('The result of dividing ' + num1 + ' by ' + num2 + ' is: ' + division);
