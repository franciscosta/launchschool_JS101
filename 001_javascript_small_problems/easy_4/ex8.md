
# Problem

  1. Write a function
  2. takes a string consisting of zero or more space separated words
  3. returns an object that shows the number of words of different sizes.
  4. Words consist of any sequence of non-space characters

  1. Input: A string of words
  2. Output: An object:
    a. Keys -> word.length
    b. Value -> count of number of words w/ that length
  3. Rules/Edge-cases:
    a. Words are comma separated
    b. Do we include commas and other non-alphanumeric? No


# Examples

wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 1, "6": 1 }

wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }

wordSizes("What's up doc?");
// { "2": 1, "4": 1, "6": 1 }

wordSizes('');
// {}

# Data Structure

  1. String
  2. Array to split up sentence into words 
  3. Object to store key-values 

# Algorithm

  'Hello how are you?'
    -> Hello 
    -> how
    -> are
    -> you? -> need to strip the ? out 

  1. Abstraction: sanitizer method:
    a. Remove punctuation from a word 
  2. Final method:
    -> Get string 
    -> Set object: {}
    a. Split string into array of words
    -> Set words = string.split(' ')
    b. Iterate through indexes of array
    -> for loop index < words.length 
      a. sanitize word + get length
      -> Set word = sanitize( words[index] ).length 
      b. Add word to object
      -> If !object[word]: object[word] = 1
      -> Else object[word] += 1
    -> Return object
