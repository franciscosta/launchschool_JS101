# Problem

- Write a function
- takes a string argument
- returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. 
- Ignore characters that are not alphabetic

1. Input: String
  - can be empty -> false 
  - can have non-alphabetic characters -> need to be disregarded 
2. Output: Boolean
  - True if all alphabetic characters are uppercase 
  - False otherwise 

# Examples

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

# Data Structure

String 

# Algorithm

0. Check if a character is alphabetic 
  - pass in a character 
  - if it's in the list of alphabetic, return true 
  - else, return false
1. A method that takes in a string
  - Iterates through its characters 
  - if at any point a character tests false, it returns false 
  - otherwise return true in the end 
