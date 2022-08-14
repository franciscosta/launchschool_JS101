
# Problem

  1. A Function
  2. takes an array of numbers 
  3. returns an array with the same number of elements
  4. each element being the running total from the original array

  1. Input: An array of numbers -> [1, 2, 3, 4, 5]
  2. Output: Array of numbers ->   [1, 3, 6, 10, 15]
  3. Rules/edge-cases:
    a. Each number in output array is a sum of nums up to that pt 
    b. Can the input be empty? Yes
    c. Can the input be a single digit? Yes 
    d. Do I manipulate the og array? Or return a new one?
      a. Could be interesting to see if its possible.

# Example

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

# Data Structure

  1. Array

# Algorithm

  1. Get array 
  2. Set accomulator = 0 
  3. Loop through array indexes
    a. accomulator += array[index]
    b. array[index] = accomulator 
  4. Return array
