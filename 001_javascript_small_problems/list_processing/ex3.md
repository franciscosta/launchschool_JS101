# Problem

- Write a function that takes two array arguments
- each containing a list of numbers
- returns a new array containing the products of all combinations of number pairs that exist between the two arrays.
- The returned array should be sorted in ascending numerical order
- You may assume that neither argument will be an empty array

1. Input: two arrays of integers 
  - never empty 
2. Output: a new array with 
  - all possible combinations of those two sets of numbers
  - their products get added to the array
  - in the end, sort by ascending order, smaller -> larger

# Example

[2, 4], [4, 3, 1, 2] ->  [2, 4, 4, 6, 8, 8, 12, 16]

# Data Structure

Arrays

# Algorithm

Question: is there a way to do this without nested loops?





0. Set newArray = [] 
1. Determine which array is smaller 
2. Loop over that array 
