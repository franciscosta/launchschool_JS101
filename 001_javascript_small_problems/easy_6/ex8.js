
const isMultiple = (number, multiple) => {
  return number === 0 ? true : number % multiple === 0;
};

const sequence = (count, start) => {

  if (count === 0) return [];

  const array = [start];
  const multiple = start;
  const increment = start === 0 ? 0 : 1;

  while (array.length < count) {
    start += increment;
    if (isMultiple(start, multiple)) array.push(start);
  }

  return array;
};

console.log(
  sequence(5, 1),          // [1, 2, 3, 4, 5]
  sequence(4, -7),         // [-7, -14, -21, -28]
  sequence(3, 0),          // [0, 0, 0]
  sequence(0, 1000000),    // []
);
