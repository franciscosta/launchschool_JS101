# Problem

- Write a function that 
- takes an array of integers between 0 and 19 
- returns an array of those integers sorted 
- based on the English word for each number:

    zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

1. Input: an array of integers
  - can the input be empty?
2. Output: An array of integers sorted 
  - based on the first char of their english names 'one' 'two'
  - should I work on the same array or return a new one?
  - what if two numbers have the same letter, do I then judge by the second?

# Example

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

# Data Structure

Array

# Algorithm

1. Set an object with each number and the key being the first letter
2. rum the sort method on the original Array
3. Compare them based on the values of the object 


