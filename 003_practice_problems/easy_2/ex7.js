
// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains 
// only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

// Input: object 
// Output: array with key value pair 

// Approach 1
function barney(object, key) {
  return [key, object[key]];
}

console.log(barney(flintstones, 'Barney'));

// Approach 2

const array = Object.entries(flintstones).filter( arr => {
  return arr[0] === 'Barney';
}).flat();


console.log(array);
