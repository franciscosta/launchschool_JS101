
const readline = require('readline-sync');

const prompt = message => {
  console.log(`=> ${message}`);
};

const invalidNumber = number => {
  return number.trimStart() === '' || Number.isNaN(Number(number.trim()));
};

prompt('Welcome to the calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Hmm.. That doesn\'t look like a valid number.');
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Hmm.. That doesn\'t look like a valid number.');
  number2 = readline.question();
}

prompt('What operation would you like to perform?');
prompt('1) Addition 2) Subtraction 3) Multiplication 4) Division');
let operation = readline.question();

while (![1, 2, 3, 4].includes(Number(operation))) {
  prompt('You must choose 1, 2, 3, or 4.');
  operation = readline.question();
}


let output;

switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
}

prompt(`The output is ${output}`);
