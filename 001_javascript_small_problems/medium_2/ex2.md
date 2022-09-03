# Problem

0. A triangle is classified as follows:

1. Equilateral: All three sides are of equal length.
2. Isosceles: Two sides are of equal length, while the third is different.
3. Scalene: All three sides are of different lengths.

4. To be a valid triangle:
- the sum of the lengths of the two shortest sides
- must be greater than the length of the longest side
- and every side must have a length greater than 0
- If either of these conditions is not satisfied, the triangle is invalid.

- Write a function that takes the lengths of the three sides
- of a triangle as arguments and
- returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

1. Input: three numbers
  - can be integers or floats
2. Output: the classification of a triangle:
  - if all sides are same: equilateral
  - two sides equal length, third different: isosceles
  - all three sides are different: scalene 
3. Boundaries:
  - all three sides must be bigger than zero
  - the sum of two shortest must be greater than longest

# Examples

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

# Data Structure

Object 

# Algorithm

- Guards:
  - all three above zero
  - sum of two smaller bigger than bigger 
- Now in valid triangle territory:
  - 
