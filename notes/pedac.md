# Template

## 1. Problem 
## Input
### Output
### Rules/Edge Cases
## 2. Examples
## 3. Data Structures
## 4. Algorithm 
### Visual Input to Output 
### Pseudo Code 
## 5. Code 

# .......................................

# Template In usage

## Example:
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with '1'. The length of the string should match the given number.

## Input:
+ One positive integer

## Output:
+ String of alternating '1's and '0's 

## Rules:
+ String needs to start with '1'
+ The length of the string should match the number provided as input
+ Return an empty string if the input is equal or less than 0

## Examples:
console.log(0);    -> '' edge case 
console.log(-1);   -> '' edge case
console.log(1);    -> '1'
console.log(6);    -> '101010'
console.log(4);    -> '1010'

## Data Structures:
+ String -> 1s and 0s

## Algorithm

       1 2 3 4 5 6 7 ...
       1 0 1 0 1 0 1 ...

+ IF input is 0 or less than 0 RETURN ''
+ SET empty string to 'result'
+ LOOP starting from 1 up to INPUT numbers
  + IF current number is odd: append a 1 to 'result'
  + IF current number is even: append a 0 to 'result'
+ RETURN result

## Code
+ Test the code along the way 


# ..................................................

# PEDAC

## Understand the Problem
1. Read the problem description
2. Identify inputs and outputs
3. Identify rules and requirements
4. Ask clarifying questions
5. Examine all Examples
## Examples and Test Cases
1. Understand how input translates to outputs
2. Identify edge cases and empty inputs
3. Create test cases and confirm outputs
## Data structures
1. Identify primary data types used
2. i.e. strings, numbers, array, object, ...
3. This helps focus on possible methods
## Algorithm
1. Step-by-step process from input to output
2. Handle valid input as well as edge cases
3. Code depends on the clarity of the Algorithm
4. Review the algorithm before moving on
## Code with Intention
1. Write code based on the algorithm
2. If changes are needed, refactor the algorithm first
3. Go at it again


# ..................................................

# PSEUDOCODE

## Keywords
1. START: Starts the program
2. SET: Set a variable to a value
3. GET: Retrieve input from user
4. PRINT: Display output to the user
5. READ: Retrieve value from variable
6. IF/ELSE IF/ELSE: Show conditional branches in logic
7. WHILE: Show looping logic
8. END: End of the program


# ..................................................

# PEDAC in more detail

## 1. Problem

    1.1 Identify input and output:
      + Data coming into the program (input)
      + Data that is supposed to go out of the program (output)
    1.2 Rules and requirements:
      + Boundaries of the Problem
      + Edge cases
      + Good time to ask questions and clarify the problem

## 2. Examples and test cases

    2.1 Come up with my own test cases
    2.2 Stretch the boundaries of the problem
      + Cases that are not provided
      + Edge cases  

## 3. Data Structures

    3.1 What kind of data am I primarily dealing with
      + Strings
      + Arrays
      + Objects
    3.2 Helpful to later on think about the methods I want to use

## 4. Algorithm

  4.1 A step by step process of what my code will look like
  4.2 A blueprint / roadmap for how to do input
  4.. How to take the data from input to output

## 5. Code with intention

