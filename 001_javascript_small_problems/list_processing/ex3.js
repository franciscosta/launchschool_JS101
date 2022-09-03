const multiplyAllPairs = (array1, array2) => {

  const array = [];

  let pointer1 = 0;
  let pointer2 = 0;

  let smaller = array1.length <= array2.length ? array1 : array2;
  let larger = array1.length <= array2.length ? array2 : array1;

  while ( pointer1 < smaller.length ) {
    array.push( smaller[pointer1] * larger[pointer2] );

    if (pointer2 < larger.length) pointer2 += 1;

    if (pointer2 === larger.length) {
      pointer1 += 1;
      pointer2 = 0;
    };
  };

  return array.sort( (a, b) => a - b );
};

console.log(
  multiplyAllPairs([2, 4], [4, 3, 1, 2]),    // [2, 4, 4, 6, 8, 8, 12, 16]
);
