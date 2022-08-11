/*

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


A. Problem

  1. Input: A string 
  2. Output: Its equivalent as an integer 
  3. Rules/Edge Cases:
    a. I can assume all input is numeric
    b. Cannot use parseInt or Number functions
    c. Have to do it the old fashion way 
    d. Have to analyze the string characters 
    e. And calculate the result 

B. Examples
  
  stringToInteger('123')    -> 123 
  stringToInteger('570')    -> 570

C. Data Structure

  1. String

D. Algorithm

  START
    GET string 
    RETURN +string
  END

*/

const stringToInteger = string => +string;

const strToInt = string => {
  
  let result = 0;
  let multiple = 1;
  const numbers = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
    6: 6, 7: 7, 8: 8, 9: 9, 0: 0
  };

  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += numbers[string[i]] * multiple;
    multiple *= 10;
  }

  return result;
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(strToInt('4321'));
