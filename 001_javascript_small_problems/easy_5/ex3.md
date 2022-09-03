# Problem

- Write a function
- takes an array as an argument
- returns an array that contains two elements
- each of which is an array

- Put the first half of the original array elements in the first element 
- and put the second half in the second element. 
- If the original array contains an odd number of elements
- place the middle element in the first half array.

1. Input: an array 
2. Output: an array with two arrays
  - first array has half the elements
  - second array has the other half
3. Rules:
  - If array.length % 2 !== 0 
  - place middle element in first half
4. Edges:
  - Guard against empty array 

# Example:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

# Data Structure 

- Array

# Algorithm

  - Get the length of the array 
  - length = length % 2 === 0 ? length / 2 : parseInt(length / 2) + 1;
  - return [ array.slice(0, middle), a.slice(middle) ]

