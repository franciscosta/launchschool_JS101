
const game = {
  options: ['rock', 'paper', 'scissors'],
  choice: {
    user: null,
    computer: null
  },
  win: null 
};

const message = {
  welcome: `=> Welcome to ${game.options.join(', ')}!`,
  choose: `=> Choose ${game.options.join(', ')}: `,
  invalid: `=> That's not a valid choice.`
};

const log = message => {
  console.log(message);
}

const getInput = message => {
  const readline = require('readline-sync');
  return readline.question(message);
};

const validateChoice = (input, options) => {
  input = input.toLowerCase();
  return options.includes(input);
};

const getUserChoice = () => {
  let choice = getInput(message.choose);
  while (!validateChoice(choice, game.options)) {
    log(message.invalid);
    choice = getInput(message.choose);
  }
  return choice;
};



console.log(
  getUserChoice(),
);
