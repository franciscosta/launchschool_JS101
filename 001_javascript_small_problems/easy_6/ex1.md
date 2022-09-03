# Problem

- Write a function that takes a string
- doubles every character in the string, and returns the result as a new string.

1. Input: A string
2. Output: A string 
3. Rules:
  - Double every character in the string 
4. Edge-cases:
  - If the string is empty, return ''

# Example

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

# Data Structure

String

# Algorithm

1. If string is empty, return string 
2. Set newString 
3. Iterate through old string 
  - newString += string[i].repeat(2)
4. Return newString


