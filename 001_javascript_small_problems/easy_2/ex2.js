/*

PROBLEM WRITE-UP
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

PEDAC

# PROBLEM 
1. Input: A string representing a person's name
2. Output: A string that greets the user
3. Rules/Edge-cases
   1. Edge cases:
     1. If the string is empty, greet 'you'
     2. If the string is all caps, make it camel case
   2. If the input does NOT end in '!' greet the user normally
   2. If the input ends in '!' greet user in all caps

# EXAMPLES

greet();
> What is your name? boB 
> Hello Bob.

greet();
> What is your name? Bob
> Hello Bob.

greet();
> What is your name? Bob!
> HELLO BOB. WHY ARE YOU SCREAMING?

# Data Structure
1. String

# ALGORITHM
  
  START
    SET name
    WHILE name.length === 0:
      SET name = GET string 
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    IF name[lastChar] === !:
      PRINT `HELLO ${name}. WHY ARE YOU SCREAMING.`
    ELSE:
      PRINT `Hello ${name}`

 */


const greet = name => {
  let readline = require('readline-sync');
  let userName;
  
  do {
    userName = readline.question('What is your name? ');
  } while (userName.trim().length === 0);

  if (userName[userName.length - 1] === '!') {
    console.log(`HELLO ${userName.toUpperCase()}. WHY ARE YOU SCREAMING?`);
  } else {
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    console.log(`Hello ${userName}.`);
  }

}

greet();

