
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// > [{ first: 42 }, { second: "value2", 3, 4, 5 }]
// slice made a shallow copy of the array
// meaning the second object is stored in the array by reference


