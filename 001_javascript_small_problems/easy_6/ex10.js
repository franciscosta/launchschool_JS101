
const reverseWord = word => {
  return word.split('').reverse().join(''); 
};

const reverseWords = sentence => {
  if (sentence.length === 0) return sentence;
  return sentence.split(' ').map( word => {
    if (word.length >= 5) return reverseWord(word);
    return word;
  }).join(' ');
};

console.log(
  reverseWords('Professional'),             // "lanoisseforP"
  reverseWords('Walk around the block'),    // "Walk dnuora the kcolb"
  reverseWords('Launch School'),            // "hcnuaL loohcS"
);
