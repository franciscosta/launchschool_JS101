
const repeater = (string = '') => {
  
  if (string.length === 0) return string;

  let newString = '';
  
  for (let character of string) {
    newString += character.repeat(2);
  }

  return newString;
};

console.log(
  repeater('Hello'),        // "HHeelllloo"
  repeater('Good job!'),    // "GGoooodd  jjoobb!!"
  repeater(''),             // ""
);
