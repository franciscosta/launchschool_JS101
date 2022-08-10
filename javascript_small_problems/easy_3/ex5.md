Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Input:
+ A positive integer -> 1 2 3 4 5

Output: 
+ Logs to the console
+ A right triangle whose side has n stars

Rules:
+ Triangle should be aligned to the right

Test case:

  triangle(5);
      *
     **
    ***
   ****
  *****

Algorithm:
+ Get input 
+ Set stars = 1;
+ Set emptySpaces = input - 1
+ Loop through numbers from 1 to input:
  + Set string = ' '.repeat(emptySpaces) + '*'.repeat(stars)
  + stars += 1
  + emptySpaces -= 1


