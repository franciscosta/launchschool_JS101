
const insert = (number, array) => {
  let pointer = 0;

  while (pointer < array.length) {
    if ( array[pointer] === number ) break;

    if (number > array[pointer] && array[pointer + 1] === undefined) {
      array.splice(pointer + 1, 0, number);
      break;
    } else if (number < array[pointer]) {
      array.splice(pointer, 0, number);
      break;
    }

    pointer += 1;
  }

  return array;
};


const union = (array1 = [], array2 = []) => {

  if (!array1 && !array2) return [];
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  let array = [array1[0]];
  
  const length1 = array1.length, length2 = array2.length;
  let pointer1 = 1, pointer2 = 0;
  
  while (true) {

    if (pointer1 < length1) {
      insert( array1[pointer1], array);
      pointer1 += 1;
    }

    if (pointer2 < length2) {
      insert(array2[pointer2], array);
      pointer2 += 1;
    }


    if (pointer1 >= length1 && pointer2 >= length2) break;

  }

  return array;
};


console.log(
  union([1, 5, 3], [2, 4, 6, 5]),
  union([1, 2, 3]),
  union(),
  union([9, 8, 4, 1, 654], [123, 4, 1, 98])
);
