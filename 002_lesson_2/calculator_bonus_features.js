const readline = require('readline-sync');
let messagesJSON = require('./messages.json');

const prompt = message => {
  console.log(`=> ${message}`);
};

const invalidNumber = number => {
  return number.trimStart() === '' || Number.isNaN(Number(number.trim()));
};


prompt(messagesJSON.languageChoice);
let language = readline.question();

while (!['1', '2'].includes(language)) {
  prompt(messagesJSON.languageChoice);
  language = readline.question();
}

let messages = language === 1 ? messagesJSON.en : messagesJSON.pt;

let continueCalculating = true;

while (continueCalculating) {

  prompt(messages.welcome);

  prompt(messages.first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.numberInvalid);
    number1 = readline.question();
  }

  prompt(messages.second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.numberInvalid);
    number2 = readline.question();
  }

  prompt(messages.operation);
  prompt(messages.operationList);
  let operation = readline.question();

  while (![1, 2, 3, 4].includes(Number(operation))) {
    prompt(messages.operationInvalid);
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

  prompt(messages.output + String(output));

  prompt(messages.again);
  prompt(messages.againOptions);
  let choice = readline.question();

  while (![1, 2].includes(Number(choice))) {
    prompt(messages.againInvalid);
    choice = readline.question();
  }

  continueCalculating = choice === '1' ? true : false;

}
