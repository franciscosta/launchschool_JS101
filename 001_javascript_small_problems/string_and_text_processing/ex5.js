
function swapCase(word) {
  return word.split('').map( letter => {
    if (letter.toLowerCase() === letter) return letter.toUpperCase();
    return letter.toLowerCase();
  }).join('')
}

console.log(
  swapCase('CamelCase'),              // "cAMELcASE"
  swapCase('Tonight on XYZ-TV'),      // "tONIGHT ON xyz-tv"
);
