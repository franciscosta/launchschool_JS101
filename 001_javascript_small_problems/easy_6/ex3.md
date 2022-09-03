# Problem

- Write a function that 
- takes a positive integer as an argument
- returns that number with its digits reversed.

1. Input: Integer
2. Output: Integer 
3. Rules:
  - return integer with numbers reverse 
  - 12 -> 21 
  - leading zeros get dropped 
4. Edge-cases:
  - If number is single digit, return number 

# Example

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

# Data Structure

Number 
Possibly Array

# Algorithm

- if number / 10 < 0 return number;

- need to write a sub-method that removes trailing zeroes 
  - take a number; 
  - keep parseInt(number / 10) while number % 10 === 0;
  - return that same number

- turn the number into a string 
- iterate through the string 
- add numbers into a new string
- convert back to number 
- return 
