
// Previous exercise

function staggeredCase(string = []) {
  if (string.length === 0) return string;

  let newString = '';
  let uppercase = true;

  for (let index = 0; index < string.length; index += 1) {
    const letter = string[index];

    if (/[a-zA-Z]/.test(letter)) {
      if (uppercase) {
        newString += letter.toUpperCase();
      } else {
        newString += letter.toLowerCase();
      }
      uppercase = !uppercase;
    } else {
      newString += letter;
    }
  }

  return newString;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
