const sanitize = word => {
  let newWord = '';
  for (let index = 0; index < word.length ; index += 1) {
    if ( /[0-9a-zA-Z]/.test(word[index]) ) newWord += word[index];
  }
  return newWord;
};

// Solution from the prior exercise:
const wordSizes = string => {
  const wordCounts = {};
  if (string.length === 0) return wordCounts; 

  const words = string.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    const length = sanitize(words[index]).length;
    if (!wordCounts[length]) {
      wordCounts[length] = 1;
    } else {
      wordCounts[length] += 1;
    }
  }
  return wordCounts;
};
