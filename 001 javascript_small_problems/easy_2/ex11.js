/*

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

A. Problem

  1. Input: An integer 
  2. Output: A matching string 
  3. Rules/Edge-cases:
    a. Cannot use any available methods in the language
    b. Analyze each number 

B. Examples

  integerToString(4321);        // "4321"
  integerToString(0);           // "0"
  integerToString(5000);        // "5000"
  integerToString(1234567890);  // "1234567890"

C. Data Structure:

  1. Object

D. Algorithm

  1. Decompose the number one by one
    a. 

*/



const integerToString = number => {

  const numbers = {
    1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
    6: '6', 7: '7', 8: '8', 9: '9', 0: '0'
  };

  let result = '';

  do {
    let digit = number % 10;
    result = numbers[digit] + result;
    number = Math.floor(number / 10);
  } while (number > 0);
  
  return result;

};

console.log(
  typeof integerToString(4321) === 'string',
  integerToString(0),
  integerToString(5000),
  integerToString(123456789)
);

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
