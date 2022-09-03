
const multiplicativeAverage = array => {

  let total = 1;

  for (let item of array) {
    total *= item;
  }

  total /= array.length;
  total = total.toFixed(3);

  console.log(total);

  return String(total);
};

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
multiplicativeAverage([2, 2, 2, 2])
