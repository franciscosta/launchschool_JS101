
// Let's do some "ASCII Art": a stone-age form 
// of nerd artwork from back in the days before 
// computers had video screens.

// For this practice problem, write a program 
// that outputs The Flintstones Rock! 10 times, 
// with each line indented 1 space to the right 
// of the line above it. The output should
// start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    ...

const indentedOutput = (string, ceil) => {

  // 1. const the length of the string 
  // 2. let a var that represents the indent starting at zero
  // 3. Iterate over X times
  // 4. log the sentence + indent 
  // 5. Increase the indent 

  let length = string.length;

  for (let indent = 0; indent < ceil; indent += 1) {
    console.log( string.padStart(length + indent, ' ')  );
  }
};

indentedOutput('The Flintstones Rock!', 10);
