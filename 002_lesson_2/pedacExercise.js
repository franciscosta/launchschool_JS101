
function sumOfElements(number) {
  const elements = arrayBuilder(number)[number - 1];
  return elements.reduce( (accumulator, number) => {
    return accumulator + number;
  }, 0);
}


function arrayBuilder(number) {
  if (number === 2) return [[2]];

  const array = [];

  let currentNumber = 2;
  let cellsPerRow = 1;
  let increment = 2;

  for (let row = 0; row < number; row += 1) {
    const currentRow = [];
    for (let cell = 0; cell < cellsPerRow; cell += 1) {
      currentRow.push(currentNumber);
      currentNumber += increment;
    }
    array.push(currentRow);
    cellsPerRow += 1;
  }

  return array;
}

console.log( sumOfElements(5), arrayBuilder(5))
