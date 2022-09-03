
function wordCap(sentence) {
  const listOfWords = sentence.split(' ');

  for (let index = 0; index < listOfWords.length; index += 1) {
    listOfWords[index] = uppercaseWord(listOfWords[index]);
  }

  return listOfWords.join(' ');
}


function uppercaseWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(
  wordCap('four score and seven'),       // "Four Score And Seven"
  wordCap('the javaScript language'),    // "The Javascript Language"
  wordCap('this is a "quoted" word'),    // 'This Is A "quoted" Word'
);
