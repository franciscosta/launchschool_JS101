
// Write three different ways to remove all 
// of the elements from the following array:

let numbers = [1, 2, 3, 4];

// 1.
// pop all elements through a loop

const length = numbers.length;

for (let i = 0; i < length; i += 1) {
  numbers.pop();
}

console.log(numbers);

// 2.
// While length

numbers = [1, 2, 3, 4];
while (numbers.length) numbers.pop();
console.log(numbers);

// 3.
// Splice

numbers = [1, 2, 3, 4];
numbers.splice(0,numbers.length);
console.log(numbers);

// 4.
// Alter length 

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);
