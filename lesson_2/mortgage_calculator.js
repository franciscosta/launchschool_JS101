
const log = message => {
  console.log(message);
};

const yearToMonth = years => {
  if (years === 0 || isNaN(years)) return 0;
  let months = 0;
  for (let iterator = 1; iterator <= years; iterator += 1) {
    months += 12;
  }
  return months;
};

const APRtoMonthly = apr => {
  return (apr / 12) / 100;
};

const validation = input => {
  if (isNaN(input) || !input) return false;
  return true;
};

const ask = variable => {
  const readline = require('readline-sync');
  let input;
  do {
    input = readline.question(`Please enter the desired ${variable}: `);
    input = parseFloat(input);
  } while ( !validation(input) );
  return input;
};

const anotherTry = () => {
  const readline = require('readline-sync');
  let input = readline.question('Please enter 1) to submit 2) re-do your application: ');
  while (!['1', '2'].includes(input)) {
    log('Whoops, please enter 1) to submit or 2) to re-do.');
    input = readline.question();
  }
  return input === '2';
};

const applyForLoan = () => {

  const application = {
    amount: 0,
    duration: 0,
    apr: 0
  };

  application.amount = ask('loan amount in USD (i.e. 100000.00 USD)');
  application.duration = ask('loan duration in years (i.e. 12 years)');
  application.apr = ask('APR in % (i.e. 12%)');

  return application;
};

const processApplication = () => {

  const application = applyForLoan();
  const a = application; // Short form for easy use

  a.monthlyInterest = APRtoMonthly(a.apr);
  a.durationInMonths = yearToMonth(a.duration);

  a.monthlyPayment = a.amount * ( a.monthlyInterest /
        ( 1 - Math.pow((1 + a.monthlyInterest), -(a.durationInMonths))));

  a.totalInterestPaid = (a.monthlyPayment *
    a.durationInMonths) - a.amount;

  a.totalInterestPaid = a.totalInterestPaid.toFixed(2);
  a.monthlyPayment = a.monthlyPayment.toFixed(2);

  return application;
};

const calculator = () => {

  let keepTrying = true;

  while (keepTrying) {

    log('..........................................');
    log('Welcome to Bank of America!');
    log('Let\'s get you started with an application.');
    log('...........................................');

    const application = processApplication();
    const monthlyPayment = application.monthlyPayment;
    const totalInterestPaid = application.totalInterestPaid;

    log(`Your monthly payment would be $${monthlyPayment}`);
    log(`The total interest you'd pay would be $${totalInterestPaid}`);

    log('...........................................');
    log('Would you like to submit or re-do your application?');

    keepTrying = anotherTry();
  }

  log('Awesome, your application was submitted.');

};

calculator();

