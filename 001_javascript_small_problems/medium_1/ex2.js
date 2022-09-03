
function rotateRightmostDigits(number, digit) {
  number = String(number);
  const index = number.length - digit;
  number = number.slice(0, index) + number.slice(index + 1) + number[index];
  return Number(number);
}

console.log(
  rotateRightmostDigits(735291, 1) === 735291,
  rotateRightmostDigits(735291, 2) === 735219,
  rotateRightmostDigits(735291, 3) === 735912,
  rotateRightmostDigits(735291, 4) === 732915,
  rotateRightmostDigits(735291, 5) === 752913,
  rotateRightmostDigits(735291, 6) === 352917,
);
