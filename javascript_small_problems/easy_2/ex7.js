/*

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

A. Problem

  1. Input: Two arguments of any kind to be evaluated as truthy or falsy
  2. Output: A boolean 
  3. Rules:
    a. Take two arguments 
    b. return true only if exactly one arg is truthy
    c. for all other instances return falsy 

B. Examples

  console.log(xor(5, 0) === true);
  console.log(xor(false, true) === true);
  console.log(xor(1, 1) === false);
  console.log(xor(true, true) === false);

C. Data Structure

  1. Boolean

D. Algorithm

  START
    SET a, SET b 
    SET state
    SWITCH (a | b):
      case a == true && b == false:
      case a == false && a == true;
        state = true
        BREAK
      default:
        state = false
    RETURN state 
  END

*/

const xor = (a, b) => {
  a = !!a, b = !!b;
  switch (a, b) {
    case (a === true && b === true):
    case (a === false && b === true):
      return true;
    default:
      return false;
  }
};

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
