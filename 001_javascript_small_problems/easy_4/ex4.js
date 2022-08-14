
const isPalindrome = string => {
  if (string.length === 0) return false;
  if (string.length === 1) return true;
  const length = string.length
  let isPalindrome = true;
  for (let index = 0; index < length; index += 1) {
    if (index > length) break;
    if (string[index] !== string[length - 1 - index]) isPalindrome = false;
  }
  return isPalindrome
};

console.log(
  isPalindrome('') === false,
  isPalindrome('1') === true,
  isPalindrome('12') === false,
  isPalindrome('22') === true,
  isPalindrome('Madam') === false,
  isPalindrome('MADAM') == true,
  isPalindrome('madam ** madam') === true
);
