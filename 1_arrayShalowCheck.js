
let a = [
  [ { name: 'Francisco', age: 34 } ],  // arrays equal each other if same object 
  { name: 'Anthony', age: 27 }         // objects equal each other if same object 
];

// This copies the pointer to the array
let pointer = a;

// This makes a shallow copy of the array
// It then stores a pointer to the new array in b
let b = a.slice();


// How can I check if this a shallow or a deep copy?
// Iterate through the array and check if elements are the same object

let shalow = true;
for (let index = 0; index < a.length; index += 1) {
  if ( a[index] !== b[index] ) shalow = false;
}

console.log(shalow ? 'It is a shallow copy' : 'its not a shallow copy');



b.push( { name: 'Frank', age: 34 } );

// 
console.log(a);
console.log(pointer);
console.log(b);
