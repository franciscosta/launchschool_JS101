
const substrings = string => {
  const array = [];

  let pointerA = 0;
  let pointerB = 1;

  while ( pointerA <= string.length ) {
    array.push( string.slice(pointerA, pointerB) );

    if (pointerB < string.length) {
      pointerB += 1;
    } else {
      pointerA += 1;
      pointerB = pointerA + 1;
    }
  }

  return array;
};

console.log(
  substrings('abcde')
);
