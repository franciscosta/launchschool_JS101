
function sumSquareDifference(number) {
  let sum1 = 0;
  let sum2 = 0;

  for (let n = 1; n <= number; n += 1) {
    sum1 += n;
    sum2 += square(n);
  }

  return square(sum1) - sum2;
}

function square(number) {
  return number * number;
}

console.log(
  sumSquareDifference(3),      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sumSquareDifference(10),     // 2640
  sumSquareDifference(1),      // 0
  sumSquareDifference(100),    // 25164150
);
