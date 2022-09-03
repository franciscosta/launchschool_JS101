# Problem

- Write a function
- takes a string as an argument
- returns that string with:
  - every lowercase letter changed to uppercase
  - every uppercase letter changed to lowercase
  - Leave all other characters unchanged

1. Input: String
2. Output: String
  - casing inverted

# Example

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

# Data Structure

String 

# Algorithm

1. Split the string into characters
2. Map each character 
  - if lowerCase -> uppercase 
  - else lowercase 
3. Join 
4. Return
