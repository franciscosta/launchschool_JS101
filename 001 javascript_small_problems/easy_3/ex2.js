/*

Write a function that will take a short line of text, and write it to the console log within a box.

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

A. Problem
  
  1. Input: A string
  2. Output: A specially formatted string
  3. Rules/Edge-cases:
    a. Do I account for an empty string? Sure

B. Example:

  1. Above

C. Data Structure:

  1. String

D. Algorithm

  1. Define the most basic layout

*/

const logInBox = string => {
  let multiple = string.length;

  const obj = {
    0: `+-${'-'.repeat(multiple)}-+`,
    1: `| ${' '.repeat(multiple)} |`,
    2: `| ${string} |`,
    3: `| ${' '.repeat(multiple)} |`,
    4: `+-${'-'.repeat(multiple)}-+`
  };

  Object.keys(obj).forEach(key => {
    console.log(obj[key]);
  });
};

logInBox('Hello how are you');
