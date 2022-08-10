/*

PROBLEM WRITE-UP

  Write a function that determines and returns
  the UTF-16 string value of a string passed in
  as an argument. The UTF-16 string value is the
  sum of the UTF-16 values of every character in
  the string. (You may use String.prototype.charCodeAt()
  to determine the UTF-16 value of a character.)

PEDAC

  1. Problem

    1. Input: A string
    2. Output: An integer standing in as the sum of all UTF-16 values in that string
    3. Get the UTF-16 value of each character
    4. Sum all values
    5. Return the sum

  2. Examples

    utf16Value('Four score');         // 984
    utf16Value('Launch School');      // 1251
    utf16Value('a');                  // 97
    utf16Value('');                   // 0

  3. Data Structure

    N/A

  4. Algorithm

    1. Instantiate a sum character
    2. Loop through each character
    3. Get the UTF16 value
    4. Add to sum
    5. Return result

  5. Code

*/

const utf16Value = string => {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }
  return sum;
};

console.log(
  utf16Value('Four score'),         // 984
  utf16Value('Launch School'),      // 1251
  utf16Value('a'),                  // 97
  utf16Value('')                    // 0
);