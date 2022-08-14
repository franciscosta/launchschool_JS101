# Problem

  1. Write a function that determines the mean average of the 3 scores
  2. returns the letter associated with that grade.
  3. Numerical score letter grade list:
    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'
  4. Tested values are all between 0 and 100
  5. There is no need to check for neg values or greater than 100.

  1. Input: three numbers between 0 and 100 
  2. Output: A character standing for the letter grade 
  3. Rules/Edge-cases:
    a. Mean avg between the three grades 
    b. Converted into a letter grade 

# Examples

  getGrade(95, 90, 93);    // "A"
  getGrade(50, 50, 95);    // "D"

# Data Structure

  1. Number, possibly an array to move numbers around as one

# Algorithm 

  Parts:
    1. A method that calculates an average of elements in array
      a. GET array with numbers 
      b. return sum of numbers / number of numbers 
    2. A method that takes a number and returns the letter grade 
      a. GET a single number 
      b. SWITCH between all possible options 
      c. return equivalent grade 
    3. An wrapper method to bring the two methods above together:
      a. convert number inputs into array
      b. get the mean average
      c. get the letter grade based on mean average 
      d. return letter grade 
