
const isAlphabetic = char => {
  return /[a-z]/.test(char);
};

const cleanUp = string => {

  if (string.length === 0) return string;

  let newString = '';
  let nonAlpha = 0;

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (isAlphabetic(char)) {
      newString += char;
      nonAlpha = 0;
    } else {
      if (nonAlpha < 1) newString += ' ';
      nonAlpha += 1;
    }
  }

  return newString;
};

console.log(
  '"' + cleanUp("---what's my +*& line?") + '"'    // " what s my line "
);
