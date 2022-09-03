# Problem

- Write a function that returns a list of all substrings of a string
- Order the returned list by where in the string the substring begins
- This means that all substrings that start at index position 0 should come first
- then all substrings that start at index position 1, and so on
- Since multiple substrings will occur at each position
- return the substrings at a given index from shortest to longest
- You may (and should) use the leadingSubstrings function you wrote

1. Input: a string 
  - can it be empty?
  - can it be single input?
2. Output: an array
  - of all possible substrings 
  - ordered by where they start a... b... c... 

# Example

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

# Data Structure

Array 

# Algorithm

1. Set array = [] 
2. Set two pointers:
  - pointer1 = 0
  - pointer2 = 1
3. while pointer1 < = string.length
  - const currentString = string.slice(p1, p2)
  - if pointer2 < string.length
    - pointer2 += 1
  - else if pointer2 === string.length 
    - pointer1 += 1
    - pointer2 = pointer1 + 1;
4. return array 
