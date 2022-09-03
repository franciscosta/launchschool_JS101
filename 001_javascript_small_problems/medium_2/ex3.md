# Problem

A triangle is classified as follows:

- Right: One angle is a right angle (exactly 90 degrees).
- Acute: All three angles are less than 90 degrees.
- Obtuse: One angle is greater than 90 degrees.

- To be a valid triangle:
  - the sum of the angles must be exactly 180 degrees
  - every angle must be greater than 0. 
  - If either of these conditions is not satisfied, the triangle is invalid.

- Write a function that takes the three angles of a triangle as arguments
- Returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

- You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

1. Input: a triangle in the form of three integers 
2. Output: the type of triangle it is:
  - Guards:
    - if any angle is less or ecqual to zero: invalid 
    - if sum of angles isn't exactly 180: invalid
  - One angle is exactly 90: right 
  - One angle is greater than 90: obtuse
  - All angles are less than 90: acute 


# Examples

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

# Data Structure

Number
TBD

# Algorithm

- One angle is exactly 90: right 
- One angle is greater than 90: obtuse
- All angles are less than 90: acute 

0. Guards 
