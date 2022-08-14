# Problem

  1. A function that takes a string 
  2. Returns true if string passed is a palindrome
  3. Returns false otherwise
  4. Palindromes read the same way back and forward
  5. Letter case matters 

  1. Input: A string 
  2. Output: A boolean
  3. Specs/Edge-cases:
    a. Empty input? Yes 
    b. Allow user to provide input? No
    c. Letter case matters 
    d. Alpanumeric? Yes 
    e. Symbols? Yes 

# Example 

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

# Data Structure

  1. String

# Algorithm

  1. Abstractions:
    a. Split word into two halves:
      a. Get string 
      b. Set halfPt = string.length / 2
      c. Set lhs = string.slice(0, halfPT)
      d. Set rhs = string.slice(halfPt)
    b. Comparing two halves for equality 
      a. Return lhs === rhs ? true : false 

  2. Second try:
    a. Get string
    b. Set isEqual = true 
    c. Loop from 0 to string.length:
      a. if i > string.length : break
      b. string[i] !== stirng[string.length - i]: isEqual = false;
    d. Return isEqual
      

