
const isBalanced = string => {
  const opener = '(';
  const closer = ')';

  const stack = [];

  for (letter of string) {
    if (letter === opener) {
      stack.push(letter);
    } else if (letter === closer) {
      if (stack[stack.length - 1] === opener) { stack.pop(); }
      else { stack.push(letter) }
    }
  }
  return stack.length === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

