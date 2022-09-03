
const number = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 0, zero: 0
};

function wordToDigit(sentence) {

  Object.keys(number).forEach(num => {
    let regex = new RegExp(num, 'g');
    sentence = sentence.replace(regex, number[num]);
  });

  return sentence;
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
)
// "Please call me at 5 5 5 1 2 3 4. Thanks."
// 'hello'.replace ... 
