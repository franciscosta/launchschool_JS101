# Problem

- Write a function that takes a string 
- returns a list of all palindromic substrings of a string. 
- Each substring must consist of a sequence of characters that reads the same forward and backward. 
- The substrings in the returned list should be sorted by their order of appearance in the input string. 
- Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

- For the purpose of this exercise, you should consider all characters and pay attention to case; 
- that is, 'AbcbA' is a palindrome, 
- but 'Abcba' and 'Abc-bA' are not. 
- In addition, assume that single characters are not palindromes.

1. Input: a string 
  - can the input be empty? assume it can 

2. Output: an array of sub-strings
  - only the sub-strings that are palindromes
  - character casing matters 
  - single character sub-strings are not palindromes 

# Examples

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

# Data Structure

Array 

# Algorithm

1. I have my substring function 
2. I need a isPalindrome function that takes in a string:
  - If string.length < 2: return false;
  - Set wordIsPalindrome = true
  - Loop through the string 
    - check the first and last character
    - then the second and second to last
    - if at any point the chars do not match, set wordIsPalindrome to false
    - if wordIsPalindrome is false, break the loop 
  - Return wordIsPalindrome
