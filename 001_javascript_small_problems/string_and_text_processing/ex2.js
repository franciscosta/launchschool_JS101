
function removeVowels(collectionOfStrings = []) {
  if (collectionOfStrings.length === 0) return collectionOfStrings;

  for (let index = 0; index < collectionOfStrings.length; index += 1) {
    let newString = '';

    for (const character of collectionOfStrings[index]) {
      if (!/[aeiou]/.test(character.toLowerCase())) newString += character;
    }

    collectionOfStrings[index] = newString;
  }

  return collectionOfStrings;
}

console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz']),         // ["bcdfghjklmnpqrstvwxyz"]
  removeVowels(['green', 'YELLOW', 'black', 'white']),  // ["grn", "YLLW", "blck", "wht"]
  removeVowels(['ABC', 'AEIOU', 'XYZ']),                // ["BC", "", "XYZ"]
);
