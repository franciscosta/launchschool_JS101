# Problem

- Write a function that rotates the last count digits of a number. 
- To perform the rotation
    - move the first of the digits that you want to rotate to the end 
    - and shift the remaining digits to the left.

1. Input: two numbers:
  - a number I'll work on
  - a count that determines the work on the prior number 
2. Output: the number inputted, but modified,
3. Boundaries:
  - The second number determines the digit counting from the last that I'm shifting to the end of the digit

# Example

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

# Data Structure
Array

# Algorithm

1. Turn the number into a string 
2. Turn that string into an array 
3. Extract that digit 
  - array.length - c = index of that digit 
  - 
