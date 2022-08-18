// ****
const game = {

  winningCombos: {
    rock: ['scissor', 'lizard'],
    paper: ['rock', 'spock'],
    scissor: ['paper', 'lizard'],
    spock: ['scissor', 'rock'],
    lizard: ['paper', 'spock'],
  },

  choice: {
    user: null,
    computer: null,
  },

  tally: {
    maxRounds: 0,
    roundsThusFar: 0,
    userPoints: 0,
    computerPoints: 0,
    roundWinner: null,
    grandWinner: null,
  },

  roundIsValid: true,
  gameIsValid: true,

};

// ****
const messages = {
  choices: '[?] Choose rock, paper, scissor, lizard, or spock: ',
  confirm: '[x] It wasn\'t clear if you meant scissor or spock.',
  howManyRounds: '[?] How many rounds would you like to play for? ',
  tooManyRounds: '[x] Please keep your rounds between 1 and 10.',
  invalid: '[x] That\'s not a valid option.',
  outro: '[+] That was a fun game!',
  playAgain: '[?] Would you like to play again? Yes / No: '
}

// ****
const log = message => {
  console.log(message);
}

const clear = () => {
  console.clear();
}

const getUserInput = message => {
  const readline = require('readline-sync');
  return readline.question(message).toLowerCase();
};

const randomMumber = ceil => {
  return Math.floor(Math.random() * ceil);
};

const isValidNumber = number => {
  return !isNaN(number) && (number > 0 && number <= 10) && number % 10 === 0;
};

// ****
const updateRoundIsValid = () => {
  game.roundIsValid = game.tally.roundsThusFar < game.tally.maxRounds;
};

const updateGameIsValid = userIntent => {
  game.gameIsValid = userIntent;
}

const getAllHands = () => {
  return [...Object.keys(hame.winningCombos)];
};

// ****
const detectHand = hand => {
  if (input === 's') return 'confirm';

  let hand;

  getAllHands().forEach( option => {
    if (input === option || input === option[0]) hand = option;
  });

  if (!hand) hand = 'invalid';

  return hand;
};

const handIsInvalid = hand => {
  return ['invalid', 'confirm'].includes(hand);
};

// ****
const setHowManyRounds = () => {
  let intent = Number(getUserInput(messages.howManyRounds));

  while ( !isValidNumber(intent) ) {
    log(messages.tooManyRounds);
    intent = Number(getUserInput(messages.howManyRounds));
  }
  game.tally.maxRounds = intent;
};

const setUserHand = () => {
  let hand = getUserInput(messages.choices);

  while ( handIsInvalid(detectHand(hand)) ) {
    if (hand === 'invalid') log(messages.invalid);
    if (hand === 'confirm') log(messages.confirm);
    hand = getUserInput(messages.choices);
  }

  game.choices.user = hand;
}

const setIntentToPlayAgain = () => {
  const possibleChoices = ['yes', 'no', 'y', 'n'];

  log(messages.outro);
  let intent = getUserInput(messages.playAgain);

  while ( !possibleChoices.includes(intent) ) {
    log(messages.invalid);
    intent = getUserInput(messages.playAgain);
  }

  game.gameIsValid = intent[0] === 'y';
};

// ****
const setComputerHand = () => {
  const possibleHands = getAllHands();
  const randomChoice = randomNumber(possibleHands.length);
  game.hand.computer = possibleHands[randomChoice];
};

// ****
const playRound = () => {
  setUserHand();
  setComputerHand();
};

// ****
const computeRoundWinner = () => {

};

const computeGrandWinner = () => {

};

// ****
const resetGame = () => {
  game.choice.user = null;
  game.choice.computer = null;
  game.tally.roundsThusFar = 0;
  game.tally.userPoints = 0;
  game.tally.computerPoints = 0;
  game.tally.roundWinner = null;
  game.tally.grandWinner = null;
};

// ****
const rockPaperScissor = () => {

  while (game.gameIsValid) {
    logWelcome();
    setHowManyRounds(); // done
    while (game.roundIsValid) {
      playRound();
      computeRoundWinner();
      logRoundWinner();
      logTally();
    }
    computeGrandWinner();
    logGrandWinner();
    resetGame(); // done

    setIntentToPlayAgain(); // done
  }

};


