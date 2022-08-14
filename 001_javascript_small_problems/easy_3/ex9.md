# Problem
  
  1. Given a string made of some words and non-alphabetic chars
  2. write a function that returns that string
  3. with all of the non-alphabetic characters replaced by space
  4. If one or more non-alphabetic characters occur in a row
  5. you should only have one space in the result

  1. Input: A string with words + non-alphabetic chars
  2. Output: A string:
    a. With only alphabetic chars
    b. All other chars replaced w spaces 
    c. If many non-alpha in a row, replace w just one space
  3. Rules / Edge-cases:
    a. Can the string be empty? Yes 

# Examples

cleanUp("---what's my +*& line?");    // " what s my line "

# Data Structure

  1. Strings

# Algorithm

  Parts:
    1. A method that evals if char is alphabetic or not
      a. /[a-z]/.test(char) -> to eval 
    2. The outer method:
      a. Get string 
      b. Set newString = ''
      c. Set nonAlpha = 0
      b. Loop through characters of string:
        a. if character is alphanumeric:
          a. newString += char 
          b. nonAlpha = 0
        b. else:
          a. If nonAlpha < 1:
            a. newString += ' '
          b. nonAlpha += 1
        c. return newString

