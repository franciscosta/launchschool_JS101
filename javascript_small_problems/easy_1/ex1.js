/*

PROBLEM WRITE-UP

Write a function that takes one integer argument,
which may be positive, negative, or zero. This
method returns true if the number's absolute value
is odd. You may assume that the argument is a valid integer value.

PEDAC

1. Problem
   
  Input: an integer, positive, negative, or zero
  Output: boolean

  1. Test if the input is an odd number
  2. If so, return true
  3. Else, return false
  4. I can assume the input will always be a valid integer

2. Examples

  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
  console.log(isOdd(-8)); // => false
  console.log(isOdd(0)); // => false
  console.log(isOdd(7)); // => true

3. Data Structure

  1. N/A

4. Algorithm

  1. Test if the integer is divisible by 2
  2. If not, then it is an integer: true
  3. If divisible by 2, then its even: false

5. Code with Intent

  1. Use an arrow function
  2. Use a ternary operator for the test
  3. Achieve everything in one line

*/

const isOdd = integer => integer % 2 !== 0 ? true : false;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true