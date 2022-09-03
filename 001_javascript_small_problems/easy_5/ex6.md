# Problem

- Write a function that takes an array of integers as input
- multiplies all of the integers together
- divides the result by the number of entries in the array
- and returns the result as a string 
- with the value rounded to three decimal places.

1. Input: Array of integers
2. Output: Integer:
3. Rules/edge-cases:
  - Multiply all integers together 
  - Divide them by the num of items in the array 
  - Round to 3 decimals
  - return as string 

# Example

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

# Data Structure

Array

# Algorithm

1. Set a variable for total = 1;
2. Iterate through the items in the array 
  - total *= item 
3. total = total / array.length
4. round to 3 decimals:
  - parseInt( number * 1000 ) / 1000 
5. Return as string 
