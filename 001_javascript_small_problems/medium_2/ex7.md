# Problem

- Write a function that takes an array as an argument
- sorts that array using the bubble sort algorithm
- The sorting should be done "in-place"
- You may assume that the array contains at least two elements

1. Input: An array with at least two elements
  - Elements can be anything: numbers, strings, etc.
2. Output: The same array, sorted in ascending order 
3. Boundaries:
  - Can the decision of it being ascending or descending be abstracted?

## Bubble Sort:
1. Make multiple passes through an array 
2. Compare each two values
  - if first is greater than second
  - invert them
3. If an entire pass without swaps
  - exit the loop
  - return the array 

# Examples

[5, 3] -> [3, 5]

[6, 2, 7, 1, 4] -> [1, 2, 4, 6, 7]

['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'] ->
["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

# Data Structure

Array 

# Algorithm

Parts:
1. Comparing two values with ascending descending being abstracted?
2. Iterating through the array
