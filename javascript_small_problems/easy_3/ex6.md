
Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Input:
  + Four strings, one at a time, coming in from the console
  + Noun, verb, adverb, adjective 

Output:
  + A series of statements that include the input 

Data Structure:
  + An object to store all Data

Algorithm:
  + Set inputObject: noun, verb, adverb, adjective
    + Validate for input:
      + If the user types empty spaces, ask again
  + Set storyObject with staments that include inputObjects -> 1, 2, 3
  + Loop through keys of storyObject and print its contents

  Abstractions:
    + Method for content validation
    + Method to do the program


