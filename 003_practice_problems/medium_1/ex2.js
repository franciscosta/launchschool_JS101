
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

const invert = string => {

  // 1. Instantiate a new string
  // 2. Iterate over each char in the input
    // 1. If uppercase, if so, make lower and add to new string 
    // 2. Else, make upper and add to new string 
  // 3. Return new string 

  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    const char = string[index];
    if (/[A-Z]/.test(char)) { newString += char.toLowerCase(); }
    else { newString += char.toUpperCase(); }
  }
  return newString;
};

console.log(
  invert(munstersDescription)
);
