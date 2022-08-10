# Pseudocode / Algorithm
+ For simple problems I can just write it in advance
+ For more complex problems, take a piecemeal approach:
  + Deconstruct the problem into smaller problems
  + Plan for the first problem, solve it, code it, test it
  + Once working, move on to the next Once
  + Little by little you get to the whole

# Class Exercises

1. Write pseudocode for:

  A. A function that returns the sum of two numbers

  START
   GET number1
   GET number2
   PRINT number1 + number 2
  END

  B. A function that takes an array of strings, and returns a string that is all those strings concatenated together.

  START
    GET arrayOfStrings -> ['a', 'Francisco', 'San']
    IF arrayOfStrings is empty -> PRINT ''
    SET result = ''
    LOOP string in arrayOfStrings
      result += string
    PRINT result
  END

  C. A method that takes an array of integers, and returns a new array with every other element in from the original array, starting with the first element.

  START 
    GET arrayOfIntegers -> [1, 2, 3, 4, 5]
    IF arrayOfIntegers is empty, return []
    SET newArray = []
    SET iterator = 0
    WHILE iterator < length of arrayOfIntegers
      IF arrayOfIntegers at position iterator is even
        newArray += arrayOfIntegers at position iterator 
      iterator += 1
    PRINT newArray
  END

  D. A function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcxdxex', the function should return 6 (the index of the third 'x'). If the given character does not occur at least 3 times, return null.

  START
    GET character -> x
    GET string    -> 'axbxcxdxex'
    SET index = 0
    SET occurrence = 0
    SET iterator = 0
    WHILE iterator < string length: 
      IF occurrence > 3: BREAK
      IF string[index] == character:
        occurrence += 1
        index = iterator
      iterator += 1
    IF iterator < 3: 
      PRINT null 
    ELSE:
      PRINT index

  E. A function that takes two arrays of numbers and returns the result of merging the two arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes.

  START
    GET array1 -> [1, 2, 3, 4, 5]
    GET array2 -> [6, 7, 8, 9, 10]
    IF array1.length === 0: PRINT array2
    IF array2.length === 9: PRINT array1
    SET newArray = []
    SET index = 0
    WHILE index < array.length: # This assumes they have same length
      newArray += array1[index]
      newArray += array2[index]
      index += 1
    PRINT newArray
  END



