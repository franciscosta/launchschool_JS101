# Problem

- Write a function
- takes an array of strings
- returns an array of the same string values
- but with all vowels (a, e, i, o, u) removed.

1. Input: An array of strings 
2. Returns an array of the same strings minus [a-u]
  - should it be the same array? yes 
  - can the array be empty? yes, return same array
  - can input be empty? sure, return empty array 


# Examples

removeVowels(['abcdefghijklmnopqrstuvwxyz']);
// ["bcdfghjklmnpqrstvwxyz"]

removeVowels(['green', 'YELLOW', 'black', 'white']);
// ["grn", "YLLW", "blck", "wht"]

removeVowels(['ABC', 'AEIOU', 'XYZ']);
// ["BC", "", "XYZ"]

# Data Structure

Array

# Algorithm

1. Get the Array
2. Iterate over each sentence in the array 
  - convert the string into an array 
  - reduce it to only characters ![a-u]
  - replace that item in the array with a new one
