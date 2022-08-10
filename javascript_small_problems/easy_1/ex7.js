/*

PROBLEM WRITE-UP

  Write a function that takes two strings as
  arguments, determines the length of the two
  strings, and then returns the result of
  concatenating the shorter string, the longer
  string, and the shorter string once again.
  You may assume that the strings are of different lengths.

PEDAC

  1. Problem

    1. Input: Two strings 
    2. Output: Another string
    3. Determine the longest and shortest of the two
    4. Concatenate shorter + longer + shorter

  2. Examples

    shortLongShort('abc', 'defgh');    // "abcdefghabc"
    shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
    shortLongShort('', 'xyz');         // "xyz"

  3. Data Structure

    An array to store the strings.

  4. Algoritm

    1. Get string input
    2. Determine longest of the two
    3. Determine shortest of the two
    4. Return truncated strings

  5. Code with Intent

    1. A function that:
      a. takes two string args
      b. if empty, defaults to empty strings
      c. Sort the array by string length
      d. Return truncated strings

*/

const shortLongShort = (str1, str2) => {
  let s = [str1, str2];
  s.sort( (lhs, rhs) => lhs.length <= rhs.length ? -1 : 1);
  return s[0] + s[1] + s[0];
}

console.log(
  shortLongShort('abc', 'defgh'),    // "abcdefghabc"
  shortLongShort('abcde', 'fgh'),    // "fghabcdefgh"
  shortLongShort('', 'xyz')          // "xyz"
);
