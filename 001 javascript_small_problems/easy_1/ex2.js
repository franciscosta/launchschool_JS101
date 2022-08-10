/*

PROBLEM WRITE-UP

  Log all odd numbers from 1 to 99, inclusive,
  to the console, with each number on a separate line.

PEDAC

1. Problem

  Input: N/A
  Output: The function doesn't output, but it logs onto the console

  1. Iterate through a collection of numbers from 1 to 99 inclusive
  2. Each in it's own separate line
  3. For each number, test if the number is odd
  4. If so, log the number
  5. If not, skip it

2. Examples

  logOdd();
  // > 1
  // > 3
  // > 5
  ...

3. Data Structure

  N/A


4. Algorithm

  1. Define a method to test if a number is odd
  2. Cycle through all numbers from 1 to 99 inclusive
  3. Test if the given nuber is odd
  4. If true, log the number onto the console


5. Code with Intent

  1. Isolate the logic for testing if a number is odd into its own function
  2. Define a function to cycle from a to b and take a callback function as a test case
  3. Loop through the numbers a to b inclusive
  4. Match the given number and the call back
  5. Log the number to the console

*/

const isOdd = integer => integer % 2 !== 0 ? true : false;

const logNumbersFrom = (start, end, condition) => {
  for (let integer = start; integer <= end; integer += 1 ) {
    if (condition(integer)) console.log(integer);
  }
};

logNumbersFrom(1, 99, isOdd);