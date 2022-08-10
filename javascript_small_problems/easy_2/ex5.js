/*

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

A. Problem
  1. Input: Two positive integers 
  2. Output: Six operations:
    a. Addition
    b. Subtraction
    c. Multiplication
    d. Division
    e. Remainder
    f. Power
  3. Rules:
    a. Need to get these numbers from the command line
    a. No need to validate the input 

B. Example:

  ==> Enter the first number:
  23
  ==> Enter the second number:
  17
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23

C. Data Structure:
  1. An object to house all six operations 

D. ALGORITHM

  START
    GET a, GET b
    SET operations object
      addition: a * b
      subtraction: a - b
      Multiplication: a * b
      Division: a / b
      Remainder: a % b
      Power: a ** b
    FOR key in operation object keys
      PRINT key(a, b) -> call key as function
  END

*/

const allOperations = () => {

  const readline = require('readline-sync');

  const operations = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
    '%': function(a, b) { return a % b},
    '**': function(a, b) { return a ** b }
  }

  const keys = Object.keys(operations);

  const a = readline.questionInt('Enter the first number: ')
  const b = readline.questionInt('Enter the second number: ')

  keys.forEach( key => {
    let result = operations[key](a, b);
    console.log(`${a} ${key} ${b} = ${result}`);
  });

};

allOperations();
