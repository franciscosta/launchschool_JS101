/*

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

A. Problem

  1. Input: a string
  2. Output: a string 
  3. Rules/Edge-cases:
    a. Remove all consecutive characters from the string
    b. leave just one
    c. in essence, no repeated chars

B. Example:

  crunch('ddaaiillyy ddoouubbllee');    // "daily double"
  crunch('4444abcabccba');              // "4abcabcba"
  crunch('ggggggggggggggg');            // "g"
  crunch('a');                          // "a"
  crunch('');                           // ""

C. Data Structure:

  1. String 

D. Algorithm:

  1. Part 1: Account for strings with one or less chars
  2. Part 2: A system to traverse through the string
    a. A loop that cycles through all letters
    b. Start loop at 1:
      a. if 1 in old string is equal to 0 in new string, skip
      b. if not, add it up

*/

const crunch = string => {
  if (string.length <= 1) return string;
  let result = string[0];
  for (let index = 1; index < string.length; index += 1) {
    if (string[index - 1] !== string[index]) {
      result += string[index];
    }
  }
  return result;
};

console.log(
  crunch('ddaaiillyy ddoouubbllee'),    // "daily double"
  crunch('4444abcabccba'),              // "4abcabcba"
  crunch('ggggggggggggggg'),            // "g"
  crunch('a'),                          // "a"
  crunch('')
);
