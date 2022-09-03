# Problem

- Write a function that takes a string
- returns an object containing the following three properties:

1. the percentage of characters in the string that are lowercase letters
2. the percentage of characters that are uppercase letters
3. the percentage of characters that are neither
4. You may assume that the string will always contain at least one character.

1. Input: a string
2. Output: an object 
  - percentage of lowercase 
  - percentage of uppercase
  - percentage of neither


# Examples

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

# Data Structure

String
Object

# Algorithm

- Initialize the object 
- Traverse the string
  - count lowercase 
  - count uppercase
  - count all others 
- Divide all three values by total number of characters 
- Store averages as strings with .toFixed(2)
