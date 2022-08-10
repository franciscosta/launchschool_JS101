

const mergeArrays = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];
  const newArray = [];
  for (let index = 0; index < arr1.length; index += 1) {
    newArray.push(arr1[index], arr2[index]);
  }
  return newArray;
};

console.log(
  mergeArrays([1, 2, 3], [4, 5, 6])
);
