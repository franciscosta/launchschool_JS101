
function sumOfSums(collectionOfNumbers) {
  if (collectionOfNumbers.length === 1) return collectionOfNumbers[0];

  let accumulator = 0;
  let start = 0;
  let pointer = 1;

  while (pointer <= collectionOfNumbers.length) {
    
    const subCollection = collectionOfNumbers.slice(start, pointer);

    accumulator += subCollection.reduce( (accumulator, number) => {
      return accumulator = accumulator + number;
    }, 0);

    pointer += 1;
  }

  return accumulator;
}

console.log(
  sumOfSums([1, 2, 3]),

  sumOfSums([3, 5, 2]),        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  sumOfSums([1, 5, 7, 3]),     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  sumOfSums([4]),              // 4
  sumOfSums([1, 2, 3, 4, 5]),  // 35
)
