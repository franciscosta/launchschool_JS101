# Problem

- Write a function that takes a string, 
- doubles every consonant character in the string, 
- and returns the result as a new string. 
- The function should not double vowels ('a','e','i','o','u'), 
- digits, punctuation, or whitespace.

# Example

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

# Data Structure

String 

# Algorithm

- If string is emoty return string 
- Set a regex of all consonants 
- Set new string 
- Iterate through char in string 
  if char is true as per regex 
    newString += char.repeat(2)
  else
    newString += char 
- return String



