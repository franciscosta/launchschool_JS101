
const multiplyList = (array1 = [], array2 = []) => {
  
  if (!array1 && !array2) return [];

  let newArray = [];
  for (let index = 0; index < array1.length; index += 1) {
    newArray.push( array1[index] * array2[index] );
  }

  return newArray;
};

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
