# Problem

- A function that takes two integers as arguments
  - The first argument is a count
  - the second is the starting number of a sequence that your function will create. 
- The function should return an array containing the same number of elements as the count argument. 
- The value of each element should be a multiple of the starting number.

- You may assume that the count argument will always be an integer greater than or equal to 0. 
- The starting number can be any integer. 
- If the count is 0, the function should return an empty array.

1. Input: two integers
  - count 
  - startingNumber 
2. Output: an array 
  - number of items = count 
  - value of each item should be a multiple of starting number 
3. Rules:
  - count will be always >= 0
  - starting number can be any integer 
  - if count is zero, return empty array 

# Example

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

# Data structure

Array

# Algorithm

- if count === 0 return []
- sub method:
  is multiple: number => number % start === 0;
- set array = []
- set added to zero 
- multiple = start
- while added < count:
- if isMultiple(start, multiple) 
  - array.push(start)
  - added += 1 
  - start += 1 
- return array 


