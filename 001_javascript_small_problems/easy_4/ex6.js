
const isPalindromicNumber = number => {
  number = String(number);
  if (number.length === 0) return false;
  if (number.length === 1) return true;
  const length = number.length
  let isPalindrome = true;
  for (let index = 0; index < length; index += 1) {
    if (index > length) break;
    if (number[index] !== number[length - 1 - index]) isPalindrome = false;
  }
  return isPalindrome;
};

console.log(
  isPalindromicNumber(0) === true,
  isPalindromicNumber(1) === true,
  isPalindromicNumber(12) === false,
  isPalindromicNumber(22) === true,
  isPalindromicNumber(1234554321) === true,
  isPalindromicNumber(20394892) === false
);


