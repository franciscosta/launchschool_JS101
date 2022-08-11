
# Problem

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

  1. Input: A positive integer 1, 2, 3, 3, 4 
  2. Return: A string of alternating zeroes and ones
  3. Rules/Edge-cases:
    a. Length of output should match length of string
    b. Account for zero

# Examples:
    
  stringy(6)   -> '101010' 
  stringy(3)   -> '101'  
  stringy(1)   -> '1' 
  stringy(0)   -> ''

# Data structure

  1. String

# Algorithm

  GET input 
  SET string = ''
  LOOP from 1 to input:
    IF even: string += '1'
    ELSE: string += '0'
  RETURN string 

# Code


