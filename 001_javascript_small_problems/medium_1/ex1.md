# Problem

- Write a function that:
  - rotates an array 
  - by moving the first element to the end of the array
  - Do not modify the original array.

  - If the input is not an array, return undefined.
  - If the input is an empty array, return an empty array.
  - Review the test cases below, then implement the solution accordingly.

1. Input: can be an array
2. Output:
  - if an array: return rotated array
  - if empty array, return empty array
  - if no input: return undefined 
  - if not an array: return undefined 
3. Rotated array:
  - Move first element to the end of the array 
  - Do not modify the original array

# Exanples
- When the input is an array
rotateArray([7, 3, 5, 2, 9, 1]);
// [3, 5, 2, 9, 1, 7]

rotateArray(['a', 'b', 'c']);
// ["b", "c", "a"]

rotateArray(['a']);
// ["a"]

rotateArray([1, 'a', 3, 'c']);
// ["a", 3, "c", 1]

rotateArray([{ a: 2 }, [1, 2], 3]);
// [[1, 2], 3, { a: 2 }]

rotateArray([]);
// []

# Data Structure
Array

# Algorithm

0. Guard against edge cases 
1. Make a copy of the array 
  - slice() method
2. Remove first element out the array
  - shift() method
3. Add it to the end of the array
  - push() method
4. Return new array 
