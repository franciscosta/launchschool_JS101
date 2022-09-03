# Problem

- Write a function that takes a string argument
- returns a new string containing the words from 
- the string argument in reverse order.

1. Input: A string 
2. Output: same strings with words in reverse order

# Example

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

# Data Structure

String + Array

# Algorithm

0. If the string is empty, return;
1. Turn the string into an array .split(' ')
2. Reverse that array .reverse()
3. Join that array into a string .join(' ');
4. Return the reversed string

