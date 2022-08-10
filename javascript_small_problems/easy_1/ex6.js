/*

PROBLEM WRITE-UP

  Write a program that asks the user to enter an
  integer greater than 0, then asks whether the user
  wants to determine the sum or the product of all
  numbers between 1 and the entered integer, inclusive.

PEDAC

  1. Problem

    1. Input 1: An integer greater than zero
    2. Input 2: The letter 's' or the letter 'p', standing for sum and product respectively
    3. Output: The sum of all integers between 1 and Input 1
    4. The input needs to be validated:
      a. First input needs to be a number
      b. Second input needs to be only 's' or 'p'

  2. Example

    Please enter an integer greater than 0: 5
    Enter "s" to compute the sum, or "p" to compute the product. s

    The sum of the integers between 1 and 5 is 15.

  3. Data Structure

    N/A
  
  4. Algorithm

    1. Get the first input from the console and validate it
    2. Get the second input form the console and validate it
    3. If both are true, continue.
    4. Loop over all numbers from 1 to Input 1
    5. Add them all to a sum variable
    6. Return that sum

  5. Code with Intent

    1. An ask function to get input from the user
      a. Takes in an argument for data type
      b. If no arg, it gets a number
      c. If a string, it can check for a particular string
    2. A function that performs a sum or product on two numbers, depending on argument
    3. A function that takes as args the number of iterations and the type of operation
      a. Loops over all numbers from 1 to end
      b. returns the sum
    4. A console.log that prints the result to the screen

*/

const askForANumber = question => {
  const readline = require('readline-sync');
  let input;
  do {
    input = readline.question(question);
  } while (Number.isNaN(input) && input <= 0);
  return input;
};

const askForAnOperation = question => {
  const readline = require('readline-sync');
  let input;
  do {
    input = readline.question(question).toLowerCase();
  } while (!['s', 'p'].includes(input));
  return input;
};

const iteratorSum = (ceil, operation) => {
  let sum = operation === 's' ? 0 : 1;
  for (let i = 1; i <= ceil; i += 1) {
    if (operation === 's') sum += i;
    else sum *= i
  }
  return sum;
};

const pset = {
  iterations: 0,
  operation: '',
  total: 0
};

pset.iterations = askForANumber('Please enter an integer greater than 0: ');
pset.operation = askForAnOperation('Enter "s" to compute the sum, or "p" to compute the product. ');
pset.total = iteratorSum(pset.iterations, pset.operation);

console.log(`The sum of the integers between 1 and ${pset.iterations} is ${pset.total}.`);

