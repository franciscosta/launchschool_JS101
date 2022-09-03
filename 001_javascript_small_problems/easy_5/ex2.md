
# Problem

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

1. Input: two arrays of integers
2. Output: one unified array with no duplicates 
3. Assumptions:
  a. The array should be sorted
  b. If either input is empty? Return the other?
  c. If both are empty, return empty array 
  d. Arrays may not always be the same length
  e. If input is unsorted, do I have to return output sorted? Yes 

# Examples

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

# Data Structure

1. Array

# Algorithm

1. A couple of guard clauses at the start:
  a. inputs have default values of empty arrays 
  b. if either array is empty return the other 
  c. [] are falsy values in a boolean context 

2. Get the two arrays
3. Initialize two pointers, one for each array 
3. Init an object to remember the numbers I've seen
3. While ( either pointer != end of their respective array )
  a. Have i seen it?
  b. If not, cycle through the array, and find the number right after it 
  c. remember the index of that number
  d. insert at that location

1. traverse through the array 
a. once you find an item that is > than you 
b. and 
