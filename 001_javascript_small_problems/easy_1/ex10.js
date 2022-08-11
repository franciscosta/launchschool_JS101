/*

PROBLEM WRITE-UP

  Write a function that computes the sum of all numbers between 1 and
  some other number, inclusive, that are multiples of 3 or 5. For
  instance, if the supplied number is 20, the result should be
  98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

  You may assume that the number passed in is an integer greater than 1.

PEDAC

  1. Problem

    1. Input: A number standing in as the top-range
    2. Output: A number standing in as a sum 
    3. Can assume the number passed will be always > 1

    4. The sum of all numbers
      a. Including the final number / ceil
      b. That are divisible by 3 OR 5

  2. Example

    multisum(3);       // 3
    multisum(5);       // 8
    multisum(10);      // 33
    multisum(1000);    // 234168

  3. Data Structure

    N/A

  4. Algorithm

    1. A helper function that checks if the number is div by 3 or 4
    2. A function that sums the numbers up to the number provided
    3. Based on a call back

  5. Code

    1. A helper function 
      a. Is div by 3 || 5 = true
      b. else = false
    2. A multiSum function that takes in:
      a. a number
      b. a callback that determines which numbers are chosen
    3. Loop through all numbers up to ceil
    4. return the sum

*/

const isDivisibleBy = (number, divisor) => {
  return number % divisor === 0 ? true : false;
}

const multisum = ceil => {
  let sum = 0;
  for (let number = 1; number <= ceil; number += 1) {
    if (isDivisibleBy(number, 3) || isDivisibleBy(number, 5)) sum += number;
  }
  return sum
}

console.log(
  multisum(3),       // 3
  multisum(5),       // 8
  multisum(10),      // 33
  multisum(1000),    // 234168
);