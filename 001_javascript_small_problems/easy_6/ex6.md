# Problem

- Write a function that takes an integer argument
- returns an array containing all integers 
- between 1 and the argument (inclusive), in ascending order.
- You may assume that the argument will always be a positive integer

# Example

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

# Data Structure

Array

# Algorithm

- if number <= 0 return []
- set array;
- for loop from 1 up to number inclusive
  - array.push(number)
