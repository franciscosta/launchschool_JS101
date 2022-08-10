
const triangle = number => {
  if (number === 0) return '';
  let stars = 1, emptySpaces = number - 1;
  for (let index = 1; index <= number; index += 1) {
    let string = ' '.repeat(emptySpaces) + '*'.repeat(stars);
    stars += 1, emptySpaces -= 1;
    console.log(string);
  }
};

triangle(0);
triangle(3);
triangle(7);
