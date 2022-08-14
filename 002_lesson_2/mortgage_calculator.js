// Global Constants

const MONTHS_IN_YEAR = 12;
const PERCENT = 100;

// Helpers

const log = message => {
  console.log(message);
};

const clearScreen = () => {
  console.clear();
};

// Converters

const convertToNumber = number => {
  return parseFloat(number);
};

const convertYearToMonth = years => {
  if (years === 0 || isNaN(years)) return 0;
  let months = 0;
  for (let iterator = 1; iterator <= years; iterator += 1) {
    months += MONTHS_IN_YEAR;
  }
  return months;
};

const convertAPRtoMonthly = apr => {
  if (apr === 0) return 1;
  return (apr / MONTHS_IN_YEAR) / PERCENT;
};

// Input validators

const isValidNumber = number => {
  if (isNaN(number)) return false;
  if (number < 0) return false;
  return true;
};

const isValidAPR = number => {
  return number >= 0;
};

const isValidYear = number => {
  return number > 0 && Number.isInteger(number);
};

const isValidLoanAmount = number => {
  return number > 0;
};

const isValidAmount = (typeOfAmount, amount) => {
  if (!isValidNumber(amount)) return false;
  if (typeOfAmount === 'apr') return isValidAPR(amount);
  if (typeOfAmount === 'duration') return isValidYear(amount);
  return isValidLoanAmount(amount);
};

// Input getters

const getAmount = (typeOfAmount, question) => {
  const readline = require('readline-sync');
  let input;
  do {
    input = readline.question(`Please enter the desired ${question}: `);
    input = convertToNumber(input);
  } while ( !isValidAmount(typeOfAmount, input) );
  return input;
};

const getIntentToSubmit = () => {
  const readline = require('readline-sync');
  let input = readline.question('Please enter 1) to submit 2) re-do: ');
  while (!['1', '2'].includes(input)) {
    log('Whoops, please enter 1) to submit or 2) to re-do.');
    input = readline.question();
  }
  return input === '1';
};

// Application

const initApplication = () => {

  const application = {
    amount: 0,
    duration: 0,
    apr: 0
  };

  application.amount = getAmount('loanAmount', 'loan amount in USD (i.e. 100000.00 USD)');
  application.duration = getAmount('duration' , 'loan duration in years (i.e. 12 years)');
  application.apr = getAmount('apr', 'APR in % (i.e. 12%)');

  return application;
};

// Application processors

const processMonthlyPayment = application => {

  let monthlyPayment;

  if (application.apr > 0) {
    monthlyPayment = application.amount *
          ( application.monthlyInterest /
            ( 1 - Math.pow((1 + application.monthlyInterest),
              -(application.durationInMonths))));
  } else {
    monthlyPayment = application.amount / application.durationInMonths;
  }

  return monthlyPayment;
};

const processInterestPaid = application => {
  if (application.apr === 0) return 0.00;

  const interestPaid = (application.monthlyPayment *
    application.durationInMonths) - application.amount;

  return interestPaid;
};

const processApplication = () => {

  const application = initApplication();

  application.durationInMonths = convertYearToMonth(application.duration);
  application.monthlyInterest = convertAPRtoMonthly(application.apr);
  application.monthlyPayment = processMonthlyPayment(application);
  application.totalInterestPaid = processInterestPaid(application);

  return application;
};

// Onscreen Message logs

const logGreeting = () => {
  log('..........................................');
  log('Welcome to Bank of America!');
  log('Let\'s get you started with an application.');
  log('...........................................');
};

const logResult = application => {
  log(`Your monthly payment would be $${application.monthlyPayment.toFixed(2)}.`);
  log(`The total interest you'd pay would be $${application.totalInterestPaid.toFixed(2)}.`);
};

const logIntentToSubmit = () => {
  log('...........................................');
  log('Would you like to submit or re-do your application?');
};

const logSubmissionStatus = () => {
  log('Awesome, your application was submitted.');
};

// Outer Function

const applyForLoan = () => {

  let readyToSubmit = false;

  while (!readyToSubmit) {
    logGreeting();

    const application = processApplication();
    logResult(application);

    logIntentToSubmit();
    readyToSubmit = getIntentToSubmit();

    clearScreen();
  }
  logSubmissionStatus();
};

applyForLoan();


