
function isUpperCase(string) {
  if (string.length === 0) return true;

  for (const character of string) {
    if (isNotAlphabetic(character)) continue;
    if (isNotUpperCaseChar(character)) return false;
  }

  return true;
}

function isNotAlphabetic(character) {
  return !/[a-zA-Z]/.test(character);
}
 
function isNotUpperCaseChar(character) {
  return !/[A-Z]/.test(character);
}

console.log(
  isUpperCase('kjashfBa') === false,
  isUpperCase('A') === true,
  isUpperCase('a') === false,
  isUpperCase('4SCORE!') === true,
  isUpperCase('') === true
)

