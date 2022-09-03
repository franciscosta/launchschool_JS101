
const removeTrailingZeroes = number => {
  
  while (number % 10 === 0) {
    number = parseInt(number / 10);
  }

  return number;
};

const reverseNumber = number => {

  if (number / 10 < 0) return number;

  number = String(removeTrailingZeroes(number));
  let newNumber = '';

  for (let index = 0; index < number.length; index += 1) {
    newNumber = number[index] + newNumber;
  }
  
  return Number(newNumber);
};

console.log(
  reverseNumber(12345),    // 54321
  reverseNumber(12213),    // 31221
  reverseNumber(456),      // 654
  reverseNumber(12000),    // 21 -- Note that leading zeros in the result get dropped!
  reverseNumber(1),        // 1
);
