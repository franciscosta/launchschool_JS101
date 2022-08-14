# Problem

  1. Build a program that randomly generates Teddy's age
  2. and logs it to the console. 
  3. Have the age be a random number between 20 and 120 (inclusive).

  Random number generator:
  1. Input: no input 
  2. Output: an integer between 20 and 120 inclusive 


# Example

  teddy();
  > Teddy is 69 years old!

# Data Structure

  1. Numbers
  2. Math object 

# Algorithm:

  0. Set age = 0
  1. Math.random() to gen a number from 0 to 1
    a. 0.34512334.toFixed(2) -> 0.34 
    b. 0.01234233.toFixed(2) -> 0.01 
  2. Multiply it by 100
    a. 0.34 * 100 -> 34 
    b. 0.01 * 100 -> 1 
  3. Add 20 to it:
    a. 34 + 20  = 54
    b. 1 + 20 = 21
  4. Log age to console 

