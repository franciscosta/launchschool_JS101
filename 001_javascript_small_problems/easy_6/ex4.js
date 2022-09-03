
const centerOf = string => {
  const isEven = string.length % 2 === 0;
  const middle = parseInt(string.length / 2);

  return isEven ? string.slice(middle - 1, middle + 1) : string[middle];
};

console.log(
  centerOf('I Love JavaScript'), // "a"
  centerOf('Launch School'),     // " "
  centerOf('Launch'),            // "un"
  centerOf('Launchschool'),      // "hs"
  centerOf('x'),                 // "x"
);
