# Problem

- Write a function
- takes a string
- returns an object containing three properties:
  - number of characters in the string that are lowercase letters
  - number of characters that are uppercase letters
  - number of characters that are neither

1. Input: String
2. Output: Object
  - lowercase: count of lowercase characters
  - uppercase: count of uppercase characters
  - neither: count of all other characters
3. Implicit:
  - Can the string be empty? Yes, return empty object

# Examples

letterCaseCount('abCdef 123');
// { lowercase: 5, uppercase: 1, neither: 4 }

letterCaseCount('AbCd +Ef');
// { lowercase: 3, uppercase: 3, neither: 2 }

letterCaseCount('123');
// { lowercase: 0, uppercase: 0, neither: 3 }

letterCaseCount('');
// { lowercase: 0, uppercase: 0, neither: 0 }

# Data Structure

Object to collect all the characters
String as I'm iterating over a string 

# Algorithm

0. Abstract deciding what property gets increased:
  - A method that takes in a character 
  - if character is not alphabetic, return 'neither'
  - if character is uppercase, return 'uppercase'
  - if character is lowercase, return 'lowercase'

1. Set an object with the following properties:
  - lowercase: 0
  - uppercase: 0
  - neither: 0
2. Iterate through the string
  - in each iteration, pass in the method above as a key to the obj += 1

