# Problem

- Write a function that takes one argument, a positive integer
- returns a list of the digits in the number.

1. Input: an integer
2. Output: an array
  - with the digits in the array

# Example

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

# Data Structure

Number & Array

# Algorithm

Approach 1:
- Convert number to string
- Split the string into an array of chars
- map that array and convert each char into an int 

Approach 2:
- Set newArray = []
- Iterate through the number while bigger than 0?
  - array push -> number % 10
  - number = parseInt(number / 10)






