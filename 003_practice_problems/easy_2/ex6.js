
// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace 
// in JavaScript and programming in general. We'll explore 
// this in much greater depth in a future Lesson.

// Create a new array that contains all of the above 
// values, but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]


// From scratch
let flins = ['Fred', 'Wilma'];
flins = [...flins, ...['Barney', 'Betty'], ...['Bambam', 'Pebbles']];
console.log(flins);

// Using the original array
const approach1 = [].concat(...flintstones);
const approach2 = flintstones.flat();

console.log(approach1);
console.log(approach2);

