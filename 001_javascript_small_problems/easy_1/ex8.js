/*

PROBLEM WRITE-UP

  In the modern era under the Gregorian Calendar,
  leap years occur in every year that is evenly
  divisible by 4, unless the year is also divisible
  by 100. If the year is evenly divisible by 100,
  then it is not a leap year, unless the year
  is also evenly divisible by 400.

  Assume this rule is valid for any year greater
  than year 0. Write a function that takes any year
  greater than 0 as input and returns true if the
  year is a leap year, or false if it is not a leap year.
  
PEDAC

  1. Problem

    1. Input: A number greater than 0 standing in for a year
    2. Output: A boolean statement — true if a leap year, false if not

    3. Leap year: 
      a. Evenly divisible by 4
        a. Unless year is also evenly divisible by 100
          a. Unless it is ALSO evenly divisible by 400

  2. Examples

    isLeapYear(2016);      // true
    isLeapYear(2015);      // false
    isLeapYear(1);         // false
    isLeapYear(100);       // false
    ...

  3. Data Structure

    N/A

  4. Algorithm

    1. Set a state variable to false
    2. Run all three tests on the year:
      a. if div by 4: set state to true
        a. if div by 100: set state to false
          a. if div by 400: set state back to true
    3. Return state

  5. Code

    1. A function that checks if a year is leap:
      a. Three nested if statements, one inside the other
      b. A state variable that reflects the state as the year traverses the if statements
      c. Return state

*/

const isLeapYear = year => {
  let state = false;
  if (year % 4 === 0) {
    state = true;
    if (year % 100 == 0) {
      state = false;
      if (year % 400 === 0) state = true
    }
  }
  return state
};

console.log(
  isLeapYear(2016),      // true
  isLeapYear(2015),      // false
  isLeapYear(2100),      // false
  isLeapYear(2400),      // true
  isLeapYear(240000),    // true
  isLeapYear(240001),    // false
  isLeapYear(2000),      // true
  isLeapYear(1900),      // false
  isLeapYear(1752),      // true
  isLeapYear(1700),      // false
  isLeapYear(1),         // false
  isLeapYear(100),       // false
  isLeapYear(400)        // true
);