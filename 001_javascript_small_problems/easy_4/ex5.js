
const sanitize = string => {
  string = string.toLowerCase();
  let sanitized = '';
  for (let index = 0; index < string.length; index += 1) {
    if (/[a-z0-9]/.test(string[index])) sanitized += string[index];
  }
  return sanitized;
};

// From the prior exercise

const isPalindrome = string => {
  string = sanitize(string);
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
  isPalindrome('Madam') === true,
  isPalindrome('kjsdhkjdf') == false,
  isPalindrome('MADAM') == true,
  isPalindrome('madam ** madam') === true
);

