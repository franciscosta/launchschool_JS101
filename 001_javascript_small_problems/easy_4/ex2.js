const ask = number => {
  const readline = require('readline-sync');
  let input = readline.questionInt(`Enter the ${number} number: `);
  return input;
};

const postfix = number => {
  if (number === 1) return 'st';
  if (number === 2) return 'nd';
  if (number === 3) return 'rd';
  return 'th';
};

const askNumber = xTimes => {

  let numbers = [];
  for (let i = 1; i <= xTimes; i += 1) {
    numbers.push(ask(`${String(i) + postfix(i)}`));
  }

  let last = numbers.pop();
  let state = numbers.includes(last) ? 'appears' : 'does not appear';

  console.log(`The number ${last} ${state} in ${numbers.toString(',')}`);
};

askNumber(6);
