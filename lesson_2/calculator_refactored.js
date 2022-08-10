// A function that logs onto the console
// A function that asks for a number and validates input
// A function that builds in the prior function but validates the operations
// An object to represent the calculator
// A switch statement to compute all four possible operations


// Helper Functions
const log = console.log;

const ask = question => {
  const readline = require('readline-sync');
  let number;
  do {
    number = Number(readline.question(question));
  } while ( Number.isNaN(number) );
  return number;
};

const getOperation = callback => {
  let result;
  do {
    result = callback('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');
  } while (![1, 2, 3, 4].includes(result));
  return result;
}

// Calculator

log('Welcome to the calculator');

const calculator = {
  number1: ask('What is the first number?\n'),
  number2: ask('What is the second number?\n'),
  operation: getOperation(ask),
  result: 0
};

switch (calculator.operation) {
  case 1:
    calculator.result = calculator.number1 + calculator.number2;
    break;
  case 2:
    calculator.result = calculator.number1 - calculator.number2;
    break;
  case 3:
    calculator.result = calculator.number1 * calculator.number2;
    break;
  case 4:
    calculator.result = calculator.number1 / calculator.number2;
    break;
}

log(`The result is ${calculator.result}`);


