/*

PROBLEM WRITE-UP

  This is a continuation of the previous exercise.

  The British Empire adopted the Gregorian Calendar
  in 1752, which was a leap year. Prior to 1752, they
  used the Julian Calendar. Under the Julian Calendar,
  leap years occur in any year that is evenly divisible by 4.

  Using this information, update the function from the
  previous exercise to determine leap years both before
  and after 1752.

PEDAC

  1. Problem

  2. Examples

    isLeapYear(2016);      // true
    isLeapYear(2015);      // false
    isLeapYear(2100);      // false
    isLeapYear(2400);      // true
    isLeapYear(240000);    // true
    isLeapYear(240001);    // false
    isLeapYear(2000);      // true
    isLeapYear(1900);      // false
    isLeapYear(1752);      // true
    isLeapYear(1700);      // true
    isLeapYear(1);         // false
    isLeapYear(100);       // true
    isLeapYear(400);       // true

  3. Data Structure

  4. Algorithm

  5. Code

*/


const isLeapYear = year => {
  let state = false;
  if (year % 4 === 0) {
    if (year <= 1752) return true;
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
  isLeapYear(1700),      // true
  isLeapYear(1),         // false
  isLeapYear(100),       // true
  isLeapYear(400)        // true
);

"hello".length

console.log(
  isLeapYear(345)
);







