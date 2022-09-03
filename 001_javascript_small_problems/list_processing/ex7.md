# Problem

- Write a function that takes an array of numbers 
- returns the sum of the sums of each leading subsequence in that array 
- Examine the examples to see what we mean
- You may assume that the array always contains at least one number.

1. Input: array of integers 
  - this array contains at least one number 
  - i.e. the array is never empty
2. Output: an integer 
  - sum of each leading subsequence in the array 
  - 3 + 
  - (3 + 5) + 
  - (3 + 5 + 2)
  = 21 

# Examples

sumOfSums([3, 5, 2])
// (3) + (3 + 5) + (3 + 5 + 2) --> 21

sumOfSums([1, 5, 7, 3])
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36

sumOfSums([4])
// 4

sumOfSums([1, 2, 3, 4, 5]);
// 35

# Data Structure

Array

# Algorithm

0. If array.length === 1 return array [0]

1. Set an accumulator = 0
2. Set a pointer to traverse the array to 1
3. Set start to 0 (i.e. a magic number)
4. Traverse through the array starting at 1
  - slice the array and reduce it to a sum 
  - add that result to the accumulator
5. Return accumulator
