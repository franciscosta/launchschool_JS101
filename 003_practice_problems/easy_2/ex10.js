

// Write a one-line expression to count the number of 
// lower-case t characters in each of the following strings:


let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

const occurrences = (string, letter) => string.split('').filter( char => char === letter ).length;


console.log(
  occurrences(statement1, 't'),
  occurrences(statement2, 't')
);
