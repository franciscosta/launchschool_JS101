# Problem

 1. A double number is an even-length number
 2. whose left-side digits are exactly the same as its right-side digits
 3. For example, 44, 3333, 103103, and 7676 all double numbers
 4. 444, 334433, and 107 are not.

 5. Write a function that returns the number provided as an argument
 6. multiplied by two, 
 7. unless the argument is a double number; 
 8. otherwise, return the double number as-is.

 1. Input: A number 
 2. Output:
  a. If input even-number: return input as i 
  b. If not even-number: return input * 2 

 3. Rules-edge-cases:
  a. A double number is:
    1. even length
    2. left side same as right side

# Examples 

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

# Data Structure:
  
  1. Number and possibly string 

# Algorithm

  Parts:
    1. A method that identifies if a number is even-length no.
      a. Get input 
      b. convert input into a string 
      c. IF string.length % 2 == 0:
        a. IF left side === right side:
          a. RETURN true
      d. RETURN false 
    2. The outer method:
      a. GET input number and validate it 
      b. IF even-length return input 
      c. ELSE return input * 2

 
