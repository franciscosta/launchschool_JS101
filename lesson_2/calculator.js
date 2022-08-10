
const readline = require('readline-sync');
const log = console.log;

// Welcome
log('Welcome to the calculator.');

// Number 1
log('Enter the first number:');
let number1 = Number(readline.question());

// Number 2
log('Enter the second number:');
let number2 = Number(readline.question());

// Operations
log('What operation would you like to perform?');
log('1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = Number(readline.question());

let output;

switch (operation) {
  case 1:
    output = number1 + number2;
    break;
  case 2:
    output = number1 - number2;
    break;
  case 3:
    output = number1 * number2;
    break;
  case 4:
    output = number1 / number2;
    break;
}

log(`The result is ${output}`);



