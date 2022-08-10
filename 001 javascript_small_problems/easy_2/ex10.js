/*

In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

A. Problem

  1. Extend the previous function to detect if the number ha + or -
  2. If so, decouple the sign from the number

D. Algorithm

  DETECT + or -
    START
      GET string
      IF string[0] is in ['+'. '-'] return true
      ELSE return false
    END

  START
    RETURN string[0], string.slice(1)

  

*/


const stringToSignedInteger = string => {
  
  const isSigned = string => {
    return ['+', '-'].includes(string[0]);
  };

  let sign;
  if (isSigned(string)) {
    sign = string[0];
    string = string.slice(1);
  }

  let result = 0;
  let multiple = 1;
  const numbers = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
    6: 6, 7: 7, 8: 8, 9: 9, 0: 0,
  };

  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += numbers[string[i]] * multiple;
    multiple *= 10;
  }

  if (sign) return sign === '+' ? +result : -result;
  return result;
};


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
