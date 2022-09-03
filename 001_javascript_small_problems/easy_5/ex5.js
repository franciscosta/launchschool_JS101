const interleave = (array1, array2) => {
  const newArray = [];

  for (let pointer = 0; pointer < array1.length; pointer += 1) {
    newArray.push( array1[pointer], array2[pointer] );
  }

  return newArray;
};

console.log(
  interleave([1, 2, 3], ['a', 'b', 'c'])    // [1, "a", 2, "b", 3, "c"]
);
