# Problem

  1. Input: A number 
  2. Output: A number: the index of the first number to match the length of input
  3. Rules/Edge-cases:
    a. On the fibonacci Sequence:
      1. First two numbers are 1 
      2. Subsequent numbers are the sum of the prior two numbers 
    b. On the number of fibonaccis:
    c. Assume input will always be 2 or greater 

# Examples

  findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
  findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
  findFibonacciIndexByLength(10n) === 45n;
  findFibonacciIndexByLength(16n) === 74n;
  findFibonacciIndexByLength(100n) === 476n;
  findFibonacciIndexByLength(1000n) === 4782n;
  findFibonacciIndexByLength(10000n) === 47847n;

# Data Structure

  1. An array to collect the numbers?
  2. Or simply a number to calculate the iterations

# Algorithm

  1. A method to calculate the fib number
  2. A loop to calculate fib numbers from 1 to ...
  3. A method to check the length of each fib number
  4. Once found, break out of loop and return index 

  1. A method to calculate fib
   
    SET memo = {};
    FIB number
      IF memo[number]:
        RETURN memo[number]
      IF number === 1: 
        RETURN number
      ELSE: 
        RETURN memo[number] = FIB(number - 1) + FIB(number - 2)

  2. Loop to calculate fibs up to fib.length === N
    
    SET index = 1;
    SET found = false;
    WHILE !found:
      IF String( FIB(i) ).length === N:
        found = true
      index += 1 

    PRINT index
        

# Code





