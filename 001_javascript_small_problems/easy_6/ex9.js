
const reverseSentence = string => {
  if (string.length === 0) return string;
  return string.split(' ').reverse().join(' ');
};

console.log(
  reverseSentence(''),                       // ""
  reverseSentence('Hello World'),            // "World Hello"
  reverseSentence('Reverse these words'),    // "words these Reverse"
);
