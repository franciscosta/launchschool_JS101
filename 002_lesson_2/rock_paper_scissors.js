
const log = message => {
  console.log(message);
};

const getInput = question => {
  const readline = require('readline-sync');
  return readline.question(question);
};

const randomNumber = ceil => {
  return Math.floow(Math.random() * ceil);
};

const message = {
  separator: `**************************************`,
  welcome: 'Welcome to Rock Paper Scissor Lizard Spock',
  choices: `Choose rock, paper, scissor, lizard, or spock: `,
  invalid: `That's not a valid option.`,
  confirm: `Whoops! It's unclear whether you mean scissors or spock.`,
};

const logWelcome = _ => {
  log(message.separator);
  log(message.welcome);
}


const game = {
  
  option: {
    rock: { wins: ['scissors', 'lizard']  },
    paper: { wins: ['rock', 'spock'] },
    scissors: { wins: ['paper', 'lizard'] },
    spock: { wins: ['scissors', 'rock'] },
    lizard: { wins: ['paper', 'spock'] }
  },

  player: {
    user: null,
    computer: null
  },

  tally: {
    maxRounds: 5,
    rounds: 0,
    currentWinner: '',
    totalUser: 0,
    totalComputer: 0
  },

  initPlayer() {
    this.player.user = null;
    this.player.computer = null;
  },

  initTally() {
    this.tally.rounds = 0;
    this.tally.totalUser = 0;
    this.tally.totalComputer = 0;
  },

  updateTally() {
    if (this.tally.currentWinner === 'user') this.tally.totalUser += 1;
    if (this.tally.currentWinner === 'computer') this.tally.totalComputer += 1;
    this.tally.rounds += 1;
  },

  getOptions() {
    return [...Object.keys(this.option)];
  },

  getPlayerHand(which) {
    return which === 'user' ? this.player.user : this.player.computer;
  },

  detectOption(input) {
    if (input === 's') return 'confirm';

    this.getOptions().forEach( option => {
      if (input === option || input === option[0]) return option;
    });

    return 'invalid';
  },

  validateOption(input) {
    return !['confirm', 'invalid',...this.getOptions()].includes(input);
  },

  setUserHand() {
    let hand = this.detectOption(getInput(message.choices));
    while ( !this.validateOption(hand) ) {
      if (hand === 'invalid') log(message.invalid);
      if (hand === 'confirm') log(message.confirm);
      hand = this.detectOption(getInput(message.choices));
    }
    this.player.user = hand;
  },

  setComputerHand() {
    const options = this.getOptions();
    const random = randomNumber(options.length);
    this.player.computer = options[random];
  },

  computeWinner() {
    const user = this.getPlayerHand('user');
    const computer = this.getPlayerHand('computer');
    
    if (user === computer) this.tally.computer = 'tie';
    if (this.option[user].wins.includes(computer)) this.tally.currentWinner = 'user';
    this.tally.currentWinner = 'computer';
  }

};

const logWinner = _ => {
  const winner = game.tally.currentWinner;
  log(`The winner of this round is ${winner}.`)
};

const logTally = _ => {
  log(game.tally)
};

const gamePlay = _ => {
  
  game.initPlayer();
  game.initTally();

  logWelcome();

  while (game.tally.rounds < game.tally.maxRounds) {

    game.setUserHand();
    game.setComputerHand();
    game.computeWinner();
    game.updateTally();

    logWinner();
    logTally();

  }

};

gamePlay();






