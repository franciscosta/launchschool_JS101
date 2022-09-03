
function palindromes(sentence) {
  if (sentence.length === 0) return [];
  const listOfSubstrings = subStrings(sentence);
  return listOfSubstrings.filter(isPalindrome)
}

function subStrings(string) {
  const array = [];

  let pointerA = 0;
  let pointerB = 1;

  while ( pointerA <= string.length ) {
    const subString = string.slice(pointerA, pointerB)
    array.push(subString);

    if (pointerB < string.length) {
      pointerB += 1;
    } else {
      pointerA += 1;
      pointerB = pointerA + 1;
    }
  }

  return array;
}

function isPalindrome(subString) {
  if (subString.length < 2) return false;

  let wordIsPalinfrome = true;

  for (let leftPointer = 0; leftPointer < subString.length; leftPointer += 1) {
    const rightPointer = subString.length - 1 - leftPointer;

    if (subString[leftPointer] !== subString[rightPointer]) wordIsPalinfrome = false;
    if (!wordIsPalinfrome) break;
  }

  return wordIsPalinfrome
}




console.log(
  palindromes('abcd'),       // []
  palindromes('madam'),      // [ "madam", "ada" ]

  palindromes('hello-madam-did-madam-goodbye'),
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo" ]

  palindromes('knitting cassettes'),
  // returns
  // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
);

