# Problem

- Take the number 735291
- rotate it by one digit to the left
- getting 352917
- Keep the first digit fixed and rotate the remaining digits to get 329175
- Keep the first two digits fixed in place and rotate again to get 321759
- Keep the first three digits fixed in place and rotate again to get 321597
- Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579
- The resulting number is called the maximum rotation of the original number.

735291 -> 352917
- rotate it by one digit to the left

352917 -> 329175
- keep the first digit fixed in place and rotate the remaining digits

329175 -> 321759
- Keep the first two digits fixed in place and rotate again

321759 -> 321597
- Keep the first three digits fixed in place and rotate again to get

321597 -> 321579
- keep the first four digits fixed in place and rotate the final two digits

- Write a function that takes an integer as an argument
- returns the maximum rotation of that integer. 
- You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

1. Input: an integer 
2. Output: an integer 
3. Boundaries:
  - Rotate the number until you get the maximum rotation of that integer
  - Drop leading zeroes (start without this feature)

# Examples

735291 -> 321579
3 -> 3 
35 -> 53
105 -> 15 (leading zero is dropped)
8703529146 -> 7321609845

# Data Structure
String

# Algorithm

1. Convert the number into a String
2. Iterate over the number
  - at each iteration, return a smaller portion of the number 
  - slice 0, end 
  - slice 1, end 
  - slice 2, end 
  - slice 3, end
  - until index === length - 1 

