
const doubleConsonants = (string = '') => {
  if (string.length === 0) return string;

  let pattern = /[bcdfghjklmnpqrstvwxyz]/;
  let newString = '';

  for (let character of string) {
    if (pattern.test(character.toLowerCase())) { newString += character.repeat(2); }
    else { newString += character; }
  }

  return newString;
};

console.log(
  doubleConsonants('String'),          // "SSttrrinngg"
  doubleConsonants('Hello-World!'),    // "HHellllo-WWorrlldd!"
  doubleConsonants('July 4th'),        // "JJullyy 4tthh"
  doubleConsonants(''),                // ""
);
