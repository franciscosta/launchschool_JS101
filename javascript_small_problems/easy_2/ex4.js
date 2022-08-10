
/*

Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

A. Problem
  1. Input: Two Numbers
  2. Output: Their square
  3. Rules:
    a. Use multiply function from previous exercise

B. Examples:
  1. console.log(square(5) === 25); // logs true
  2. console.log(square(-8) === 64); // logs true

C. Data Structure:
  1. Numbers

D. Algorithm
  
  START
    GET number
    PRINT multiply(number, number)
  END

E. Code

*/


const multiply = (number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return 'Invalid input'
  } else {
    return number1 * number2;
  }
};

const square = number => {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true


