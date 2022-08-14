
const inverter = word => {
  if (word.length <= 1) return word;
  let len = word.length;
  return word[len - 1] + word.slice(1, len - 1) + word[0];
};

const swap = string => {
  let words = string.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    words[index] = inverter(words[index]);
  }
  return words.join(' ');
};

console.log(
  swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
  swap('Abcde'),                          // "ebcdA"
  swap('a'),                              // "a"
);

