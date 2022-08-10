/*

In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

*/


const integerToString = number => {

  number = Math.abs(number);

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

const signedIntegerToString = number => {
  let result = integerToString(number);
  if (number < 0) {
    return '-' + result;
  } else if (number > 0) {
    return '+' + result;
  }
  return result;
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0) === "0");
