
const runningTotal = array => {
  let accomulator = 0;
  for (let index = 0; index < array.length ; index += 1) {
    accomulator += array[index];
    array[index] = accomulator;
  }
  return array;
};

console.log(
  runningTotal([1, 2, 3, 4, 5]),
  runningTotal([2, 5, 13]),
  runningTotal([14, 11, 7, 15, 20]),
  runningTotal([3]),
  runningTotal([])
);
