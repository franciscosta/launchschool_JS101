
# Problem

  1. Write a program that solicits six numbers
  2. logs a message that describes whether the sixth number
  3. appears among the first five numbers.

  1. Input:
    a. Get number from user 6x
  2. Output:
    a. A string that states if 6th is in group or not
    b. a appears in a,b,c,d,e

# Example

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

# Data structure

  1. Arrays

# Algorithm

  Parts:
  1. A function that asks user for number + validates 
  2. A function that:
    a. Set numbers = []
    b. Loops from 0 to 5
      a. ask user for number 
      b. append to numbers 
    c. Set state = numbers.includes() ? 'appears' : 'does not appear'
    d. Set statement = 'The number ${} ${state} in ${}'
    d. Return statement 
