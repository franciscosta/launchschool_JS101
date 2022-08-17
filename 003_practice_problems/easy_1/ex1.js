
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);
console.log(numbers[4]);

// > No! 
// > numbers -> [1, 2, 3, <3 empty items>, 5]
// > numbers[4] -> undefined

// Bonus

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// > undefined 

