const wordSizes = string => {
  const wordCounts = {};
  if (string.length === 0) return wordCounts; 

  const words = string.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    const length = words[index].length;
    if (!wordCounts[length]) {
      wordCounts[length] = 1;
    } else {
      wordCounts[length] += 1;
    }
  }
  return wordCounts;
};

console.log(
  wordSizes('Four score and seven.'), // 4: 1, 5: 2, 3: 1
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),
  wordSizes("What's up doc?"),
  wordSizes('')
);
