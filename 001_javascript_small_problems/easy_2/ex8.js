/*

Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

A. Problem

  1. Input: Array of elements 
  2. Output: An array with every other element 0, 2, 4
  3. Rules:
    a. Consider only indices divisible by two 
    b. Consider an empty array as input 
    c. Consider an array with only one element

B. Examples

  oddities([])        => [] Returns itself 
  oddities([1])       => [1] Returns itself
  oddities([1, 2])    => [1] 
  oddities([1, 2, 3]) => [1, 3]

C. Data Structure

  1. Array

D. Algorithm

  START
    GET array 
    SET newArray
    IF array.length <= 1:
      RETURN array
    ELSE
      LOOP index in array:
        IF index % 2 === 0:
          newArray += array[index]
    RETURN newArray 
  EMD

*/

const oddities = array => {
  if (array.length <= 1) return array;
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 0) newArray.push(array[i]);
  }
  return newArray
};



console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
