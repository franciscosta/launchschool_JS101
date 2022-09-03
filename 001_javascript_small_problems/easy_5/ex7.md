# Problem

- Write a function that takes two array arguments
- each containing a list of numbers
- and returns a new array that contains the product of each pair of numbers 
- from the arguments that have the same index. 
- You may assume that the arguments contain the same number of elements.

1. Input: Two arrays of ints 
2. Output: A new array where each number is the product of each pair of nums 
3. Both arrays will have the same length
4. Guard against empty arrays

# Example

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

# Data Structure

Array

# Algorithm

1. Guard against empty arrays 
2. Set new empty array
3. Iterate through indices of both arrays 
  - multiply both numbers and push them onto the new array 
4. Return the new array 
