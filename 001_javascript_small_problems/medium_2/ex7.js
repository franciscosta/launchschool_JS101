
function bubbleSort(array) {

  let unsorted = 0;
  let pointer = 0;

  while (true) {
    const lhs = array[pointer];
    const rhs = array[pointer + 1];

    if (lhs > rhs) {
      array[pointer] = rhs;
      array[pointer + 1] = lhs;
      unsorted += 1;
    }

    pointer += 1;

    if (pointer + 1 >= array.length) {
      if (unsorted === 0) break;
      pointer = 0;
      unsorted = 0;
    }
  }

  return array;
}

console.log(
  bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'])
);
