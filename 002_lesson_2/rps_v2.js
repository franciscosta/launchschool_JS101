const game = {

  hands: {
    rock: { wins: ['scissor', 'lizard']  },
    paper: { wins: ['rock', 'spock'] },
    scissor: { wins: ['paper', 'lizard'] },
    spock: { wins: ['scissor', 'rock'] },
    lizard: { wins: ['paper', 'spock'] },
  },

  hand: {
    user: null,
    computer: null,
  },

  tally: {
    maxRounds: 5,
    roundsThusFar: 0,
    userPoints: 0,
    computerPoints: 0,
    roundWinner: null,
    grandWinner: null,
  },

};

// ****************
const messages = {
  separator: ` `,
  welcome: '[+] Greetings, friend!',
  whatGame: `[+] You're in for a nerdy rock paper scissors game.`,
  information: `[+] Take a deep breath and get started — best of 5 rounds wins.`,
  choices: `[+] Choose rock, paper, scissor, lizard, or spock: `,
  invalid: `[x] That's not a valid option.`,
  confirm: `[?] Whoops! It's unclear whether you mean scissors or spock.`,
  userChoice: `    You chose: `,
  computerChoice: `    The computer chose: `,
  roundWinner: `    This round's winner: `,
  tallyDisplay: `    Tally: `,
  roundDisplay: `    Rounds: `,
  grandWinner: `[+] Grand winner: `,
  roundTie: `    You tied.`,
  grandTie: `[+] Unfortunately no one won — you tied!!`,
  outro: `[+] That was fun!!`,
  playAgain: `[+] Would you like to play again? Yes / No: `
};

// ****************
const log = message => {
  console.log(message);
};

// ****************
const clear = _ => {
  console.clear();
};

// ****************
const getInput = question => {
  const readline = require('readline-sync');
  return readline.question(question).toLowerCase();
};

// ****************
const randomNumber = ceil => {
  return Math.floor(Math.random() * ceil);
};

// ****************
const resetGame = _ => {
  game.hand.user = null;
  game.hand.computer = null;
  game.tally.roundsThusFar = 0;
  game.tally.userPoints = 0;
  game.tally.computerPoints = 0;
  game.tally.roundWinner = null;
  game.tally.grandWinner = null;
};

// ***************
const isValidRound = _ => {
  return game.tally.roundsThusFar < game.tally.maxRounds;
};

// ****************
const getAllHands = _ => {
  return [...Object.keys(game.hands)];
};

// ****************
const detectHand = input => {
  let hand;

  if (input === 's') return 'confirm';

  getAllHands().forEach( option => {
    if (input === option || input === option[0]) hand = option;
  });

  if (!hand) hand = 'invalid';

  return hand;
};

// ****************
const handIsInvalid = hand => {
  return ['invalid', 'confirm'].includes(hand);
};

// ****************
const setUserHand = _ => {
  let hand = detectHand(getInput(messages.choices));

  while (handIsInvalid(hand)) {
    if (hand === 'invalid') log(messages.invalid);
    if (hand === 'confirm') log(messages.confirm);
    hand = detectHand(getInput(messages.choices));
  }

  game.hand.user = hand;
};

// ****************
const setComputerHand = _ => {
  const possibleHands = getAllHands();
  const randomChoice = randomNumber(possibleHands.length);
  game.hand.computer = possibleHands[randomChoice];
};

// ****************
const computeWinner = _ => {
  const user = game.hand.user;
  const computer = game.hand.computer;

  if (user === computer) return 'tie';
  if (game.hands[user].wins.includes(computer)) return 'You';
  return 'Computer';
};

// ***************
const updateTally = _ => {
  game.tally.roundWinner = computeWinner();
  game.tally.roundsThusFar += 1;
  if (game.tally.roundWinner === 'You') game.tally.userPoints += 1;
  if (game.tally.roundWinner === 'Computer') game.tally.computerPoints += 1;
};

// **************
const computeGrandWinner = _ => {
  const user = game.tally.userPoints;
  const computer = game.tally.computerPoints;

  if (user === computer) game.tally.grandWinner = 'tie';
  if (user > computer) game.tally.grandWinner = 'You';
  if (user < computer) game.tally.grandWinner = 'Computer';
};

// ***************
const playRound = _ => {
  setUserHand();
  setComputerHand();
  updateTally();
};

// ****************
const logWelcome = _ => {
  clear();
  log(messages.welcome);
  log(messages.whatGame);
  log(messages.information);
  log(messages.separator);
};

// ****************
const logTally = _ => {
  const user = game.tally.userPoints;
  const computer = game.tally.computerPoints;
  log(messages.tallyDisplay + `You: ${user} | Computer: ${computer}`);
  log(messages.roundDisplay + `${game.tally.roundsThusFar} / ${game.tally.maxRounds}`);
  log(messages.separator);
};

// ***************
const logRoundWinner = _ => {
  const winner = game.tally.roundWinner;

  log(messages.userChoice + game.hand.user);
  log(messages.computerChoice + game.hand.computer);

  if (winner === 'tie') {
    log(messages.roundTie);
  } else {
    log(messages.roundWinner + winner);
  }

  logTally();

};

// ***************
const logGrandWinner = _ => {
  const winner = game.tally.grandWinner;

  if (winner === 'tie') {
    log(messages.grandTie);
  } else {
    log(messages.grandWinner + winner);
  }

  log(messages.separator);
};

// ***************
const playAgain = _ => {
  const options = ['y', 'yes', 'n', 'no'];

  log(messages.outro);
  let intent = getInput(messages.playAgain);

  while ( !options.includes(intent) ) {
    log(messages.invalid);
    intent = getInput(messages.playAgain);
  }
  return intent[0] === 'y';
};

// ***************
const rockPaperScissor = _ => {

  let userWantsToPlay = true;

  while (userWantsToPlay) {

    logWelcome();

    while (isValidRound()) {
      playRound();
      logRoundWinner();
    }

    computeGrandWinner();
    logGrandWinner();

    userWantsToPlay = playAgain();
    log(messages.separator);
    resetGame();
  }

};

rockPaperScissor();
