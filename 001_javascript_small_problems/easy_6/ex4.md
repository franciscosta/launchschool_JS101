# Problem

- Write a function that takes a non-empty string argument
- returns the middle character(s) of the string.
- f the string has an odd length, you should return exactly one character
- If the string has an even length, you should return exactly two characters.

1. Input: a string
2. Output: a substring 
3. Rules:
  - input is always non empty 
  - if length is even, return two middle characters
  - if length is odd, return main middle character 

# Example

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

# Data Structure

String

# Algorithm

- Set length = string.length / 2
- Set middle = parseInt(length / 2)
- Set isEven = length % 2 === 0
- return isEven ? string.slice(middle - 1, middle + 1) : string[middle]
