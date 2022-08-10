/*

Write a function that returns the next to last word in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

A. Problem

  1. Input: A String
  2. Output: The next to last word in that String
  3. Rules:
    a. Can assume that input will at least contain two words
    b. Words are sequences of non-blank characters
    c. Exclude punctuation from the word, if its there

B. Example:

  penultimate('hello there!') -> 'hello'
  penultimate('launch school is great, right?') -> great 

C. Data structure:

  1. Array to split the input into words 
  2. String as I need to detect punctuation 

D. Algorithm

  START
    GET string 
    SET penultimate 
    FUNCTION CONVERT 
      CONVERT string into array of words 
      RETURN penultimate item
    FUNCTION REDUCE
      Penultimate item to only alphanumeric characters
    penultimate = REDUCE(CONVERT(string))
    PRINT penultimate
  END

*/

const penultimate = string => {
  let word = '';
  let words = string.split(' ');
  words[words.length - 2].split('').forEach( char => {
    if (/[a-z0-9]/.test(char)) word += char;
  });
  return word;
};


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate('This is fantastic, right?') === 'fantastic'); // logs true


