# Problem

- Write a function that 
- takes a string argument 
- returns a list of substrings of that string. 
- Each substring should begin with the first letter of the word
- and the list should be ordered from shortest to longest.

1. Input: a string
  - can it be empty?
  - can it be a single letter?
2. Output: an array of string 
  - collect substrings 
  - i.e. abc -> a ab abc
  - i.e. cder -> c cd cde cder 

# Examples

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

# Data Structure

Array

# Algorithm

1. Set array = []
2. Set a pointer p at 1
3. Loop through while p1 < string.length 
  - array.push(  string.slice( 0, p ) )  
4. Return the array 



