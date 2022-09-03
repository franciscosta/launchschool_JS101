
const leadingSubstrings = string => {
  let array = [];
  let pointer = 1;

  while (pointer <= string.length) {
    array.push( string.slice(0, pointer) );
    pointer += 1;
  }

  return array;
};

console.log(
  leadingSubstrings('abc'),      // ["a", "ab", "abc"]
  leadingSubstrings('a'),        // ["a"]
  leadingSubstrings('xyzzy'),    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
);
