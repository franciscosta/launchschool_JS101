
function staggeredCase(string = []) {
  if (string.length === 0) return string;

  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (index % 2 === 0) newString += string[index].toUpperCase();
    if (index % 2 !== 0) newString += string[index].toLowerCase();
  }

  return newString;
}

console.log(
  staggeredCase('I Love Launch School!'),        // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS'),                     // "AlL_CaPs"
  staggeredCase('ignore 77 the 4444 numbers'),   // "IgNoRe 77 ThE 4444 nUmBeRs"
);
