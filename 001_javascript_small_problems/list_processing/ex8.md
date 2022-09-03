# Problem

- Write a function that takes a grocery list in a two-dimensional array 
- returns a one-dimensional array. 
- Each element in the grocery list contains:
  - a fruit name
  - number that represents the desired quantity of that fruit
- The output array is such that each fruit name appears the number of times equal to its desired quantity.

1. Input: A two-dimensional array of arrays
  - Each sub array has a fruit name and a desired quantity 
  - Can the input be empty? if so, return an empty array 
2. Output: A one-dimensional array 
  - each fruit name repeated X quantity times

# Example

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

# Data Structure

Array

# Algorithm

1. Guard against empty input 
  - return an empty array
2. Set groceries = [];
2. iterate through the input with a for loop 
  - const fruit = item[0]
  - const quantity = item[1]
  - loop from up <= quantity
    - push fruit to array 




