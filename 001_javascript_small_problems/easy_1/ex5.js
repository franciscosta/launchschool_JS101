/*

PROBLEM WRITE-UP

  Create a simple tip calculator. The program should prompt
  for a bill amount and a tip rate. The program must compute
  the tip, and then log both the tip and the total amount of
  the bill to the console. You can ignore input validation
  and assume that the user will enter numbers.

PEDAC

  1. Problem

    1. Input:
      a. Prompt user for a number representing a bill ammount
      b. Prompt user for a number representing a tip percentage
    2. Output:
      a. Compute and return the tip
      b. Compute and return the total ammount owed
      c. Print both the tip and total amount to the console
  
  2. Examples:

    What is the bill? 200
    What is the tip percentage? 15

    The tip is $30.00
    The total is $230.00

  3. Data Structure

    1. An object for all three values:
      a. bill
      b. tip
      c. total

  4. Algorithm

    1. Ask user for the bill ammount and check its number
    2. Ask user for tip ammount and check its a number
    3. If any of the input is invalid, keep asking until it is
    4. Calculate the percentage using the two numbers provided
      a. Divide percentage by 100
      b. Multiply the bill by the percentage / 100
      c. Add that to the original bill
    5. Return the tip
    6. Return the total bill
    7. Print each value to the console

  5. Code with Intent

    1. A function to ask for a number input and only stops asking if valid
    2. An object that encompasses all values
    3. Populating the object via user input
    4. A function to calculate the percentage
    5. Populate object with tip and toal
    6. Print them to the screen


*/


const askNumber = type => {
  const readline = require('readline-sync');
  let number;
  do {
    number = Number(readline.question(`What is the ${type}? `));
  } while(Number.isNaN(number));
  return number;
};

const calculatePercentage = (bill, percentage) => {
  let percent = percentage / 100;
  return bill * percent;
};

const bill = {
  amount: 0,
  percentage: 0,
  tip: 0,
  total: 0
};

bill.amount = askNumber('bill');
bill.percentage = askNumber('tip percentage');
bill.tip = calculatePercentage(bill.amount, bill.percentage);
bill.total = bill.amount + bill.tip;

console.log(`The tip is $${bill.tip.toFixed(2)}`);
console.log(`The total is $${bill.total.toFixed(2)}`);

