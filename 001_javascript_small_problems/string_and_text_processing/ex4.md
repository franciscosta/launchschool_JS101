# Problem

- Write a function
- takes a string as an argument
- returns that string with the first character of every word capitalized
- and all subsequent characters in lowercase.
- You may assume that a word is any sequence of non-whitespace characters

1. Input: String
2. Output: String
  - each word has the first letter capitalized
  - each word is separated by a white space 
  - each word is a sequence of non-whitespace chars
  - but words can have more than alphabetic characters 
    - "word" as opposed to word 

# Example

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

# Data Structure

String when dealing with the string
Array to manage the words 

# Algorithm

0. Abstract turning a word into an uppercase word:
  - takes in a word 
  - returns first letter uppercased + rest as is 

1. Split the string into a list of words 
2. Set a new empty string variable
3. Iterate through the words:
  - if the first character is alphabetic:
    - pass the string down to my uppercaser method 
  - replace word at that index of the list of words
4. Join the array back into a string 
5. Return
