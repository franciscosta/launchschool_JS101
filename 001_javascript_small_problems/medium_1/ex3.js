


function maxRotation(number) {
  number = String(number);

  for (let index = 0; index <= number.length - 1; index += 1) {
    const fixedDigits = number.slice(0, index);
    let rotatedDigits = number.slice(index);
    rotatedDigits = rotateRightmostDigits(rotatedDigits, rotatedDigits.length);
    number = fixedDigits + rotatedDigits;
  }

  return Number(number);
}

function rotateRightmostDigits(number, digit) {
  const index = number.length - digit;
  number = number.slice(0, index) + number.slice(index + 1) + number[index];
  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
