# Problem

- Write a function that takes a string as an argument
- returns an array that contains every word from the string
- with each word followed by a space and the word's length
- If the argument is an empty string or if no argument is passed
- the function should return an empty array.

- You may assume that every pair of words in the string will be separated by a single space.

1. Input: A string of space separated words 
2. Output: An array of the words in that string followed by their length 
3. Edge cases:
  - the string can be empty
  - the input can be missing
  - both return an empty array

# Example

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

# Data Structure
Array and String 

# Algorithm

1. Split the string into an array of words 
2. For each word, map that array to word + ' ' + word.length 
