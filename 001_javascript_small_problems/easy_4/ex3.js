
const ask = question => {
  const readline = require('readline-sync');
  return readline.questionInt(question);
};

const retirement = () => {
  const age = ask('What is your age? ');
  const ageOfRetirement = ask('At what age would you like to retire? ');

  const currentYear = new Date().getFullYear();
  const yearsToRetirement = ageOfRetirement - age;
  const yearOfRetirement = currentYear + yearsToRetirement;

  console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.`);
  console.log(`You only have ${yearsToRetirement} of work to go!`);
};

retirement();
