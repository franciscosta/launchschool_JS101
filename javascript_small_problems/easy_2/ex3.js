/*

Create a function that takes two arguments, multiplies them together, and returns the result
console.log(multiply(5, 3) === 15); // logs true

A. PROBLEM:
  1. INPUT: Two numbers -> 3, 5
  2. OUTPUT: The product of the two numbers -> 15
  3. Rules/Edges:
    a. Can the arguments be empty? No

B. EXAMPLES
  1. multiply(3, 5); -> 15
  2. multiply('something', 'something'); -> Invalid input 

C. DATA STRUCTURE:
  1. Number

D. ALGORITHM
  
  START
    SET number1
    SET number2
    IF number1 === number AND number2 === number:
      PRINT number1 * number2
    ELSE
      PRINT Invalid Input

*/

const multiply = (number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return 'Invalid input'
  } else {
    return number1 * number2;
  }
};

console.log(
  multiply(3, 5),
  multiply('hello', 'hi')
);
