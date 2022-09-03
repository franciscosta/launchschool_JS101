# Problem

- Write a function that counts the number of occurrences of each element in a given array.
- Once counted, log each element alongside the number of occurrences. 
- Consider the words case sensitive e.g. ("suv" !== "SUV").

1. Input: array of string
2. Output: log onto the console
  - string + number of occurrences

# Example

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

# Data Structure

Object

# Algorithm

1. Set occurrences object = {}
2. Iterate over elements in the array 
  - If (key in object) += 1
  - else object[key] = 1
3. Iterate over object key,value pairs
  - log object -> key

