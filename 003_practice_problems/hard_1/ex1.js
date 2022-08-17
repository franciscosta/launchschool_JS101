
// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// Try to answer without running the code or looking at the solution.

// > No
// > Semicolons are optional
// > JS inserts them magically where they're not present
// > Therefore that return statement gets one hunder the ghood
