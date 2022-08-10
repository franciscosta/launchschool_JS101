
const ask = item => {
  const readline = require('readline-sync');
  let input = readline.question(`Please enter a ${item}: `);
  while (input.trim().length === 0) {
    console.log('=> Be sure to enter something!');
    input = readline.question(`Please enter a ${item}: `);
  }
  return input;
};

const madLib = () => {

  const input = {
    noun: '',
    verb: '',
    adjective: '',
    adverb: '',
  };

  // Populate the input object
  Object.keys(input).forEach( item => {
    input[item] = ask(item);
  });

  const story = {
    1: `Do you ${input.verb} your ${input.adjective} ${input.noun} ${input.adverb}?`,
    2: `The ${input.adjective} ${input.noun} ${input.verb}s quickly over the ${input.adjective} ${input.noun}.`,
    3: `The ${input.noun} ${input.adverb} ${input.verb}s up ${input.adjective} Joe's turtle.`
  };

  console.log(' ');

  for (let key in story) {
    console.log( story[key] );
  }

};

madLib();
