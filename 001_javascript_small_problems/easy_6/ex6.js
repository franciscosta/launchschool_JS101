
const sequence = ceil => {
  const array = [];

  for (let index = 1; index <= ceil; index += 1) {
    array.push(index);
  }

  return array;
};

console.log(
  sequence(5),    // [1, 2, 3, 4, 5]
  sequence(3),    // [1, 2, 3]
  sequence(1),    // [1]
);
