/*

PROBLEM WRITE-UP

Log all even numbers from 1 to 99, inclusive,
to the console, with each number on a separate line.

PEDAC

1. Problem

  Input: N/A
  Output: N/A — We're logging to the console

  1. Same as exercise 2
  2. Testing if the number is even this time


2. Examples

  even();
  // > 2
  // > 4
  // > 6 
  ...


3. Data Structure

  N/A


4. Algorithm

  1. Testing if a number is odd: check if the number is divisible by 2
  2. Everything else stays the same from ex 2


*/

const isEven = integer => integer % 2 == 0 ? true : false;

const logNumbersFrom = (start, end, condition) => {
  for (let integer = start; integer <= end; integer += 1 ) {
    if (condition(integer)) console.log(integer);
  }
};

logNumbersFrom(1, 99, isEven);