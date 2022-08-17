
// The following function unnecessarily uses two 
// return statements to return boolean values. 
// Can you rewrite this function so it only has 
// one return statement and does not explicitly
// use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

function isColorValid2(color) {
  return ['blue', 'green'].includes(color);
}

function isColorValid3(color) {
  return color === 'green' || color === 'blue';
}

console.log(
  isColorValid2('blue'),
  isColorValid2('red'),
  isColorValid3('green'),
  isColorValid3('red')
);
