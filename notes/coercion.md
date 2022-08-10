# Coercion
  
  1. Explicit
  2. Implicit

# Explicit Coercion

  1. When I explicitly coerce a value
  2. Number() String() Boolean() ...

## Numbers

  1. Number():
    a. Number('12')         -> 12 
    b. Number('a')          -> NaM
    c. Number('')           -> 0
    d. Number([])           -> 0
    e. Number({})           -> NaN 
    f. Number([1, 2])       -> NaN 
    g. Number([undefined])  -> 0
    h. Number(null)         -> NaN 
    i. Number(true)         -> 1 
  2. parseInt() + parseFloat():
    a. parseInt('12')       -> 12
    b. parseInt(12.2)       -> 12 
    c. parseInt('12pence')  -> 12 
    d. parseInt('10101', 2) -> 21 Can also take the base number 
  3. Unary Operator + and - 
    a. +'12'                -> 12 
    b. +''                  -> 0
    c. +[]                  -> 0 
    d. +'abc'               -> NaN 

## Strings 

  1. .toString():
    a. number.toString();       -> '12'
    b. (12).toString();         -> '12'
    c. 12..toString();          -> '12' double dot 
    d. [1, 2].toString();       -> '1, 2'
    e. true.toString();         -> 'true'
    f. [1, undefined, 2].toString();  -> '1,, 2' Treats as empty 
    g. object.toString();       -> '[object object]' X
    h. Does not work on null and undefined 

  2. String(): 
    a. String(12)               -> '12'
    b. String([1, 2])           -> '1, 2'
    c. String({1: 1, 2: 2});    -> '[object Object]'
    d. Works on null and undefined
  
  3. Inside ${__}:
    a. JS implicitly coerces 


# .................
# Implicit Coercion

  1. Loose Equality Operator == 
    a. Implicitly coerces the values into the same data type
      a. '1' == 1     -> true
        a. string is coerced into a number 
      b. 1 == true    -> true 
      c. 0 == false   -> true 
      d. '1' == true  -> true 
        a. true is converted into a number
        b. then the string is coerced into a number
      e. undefined == null   -> true 
      f. [] == []  -> false not the same object 
      g. '[object Object]' == {} -> true coerced {} to string 
      h. '' == []   -> true since [] is coerced to '' 

    Things to remember here:
      1. When a number and string are compared, string becomes number
      2. When a boolean is compared, its coerced into a number 
      3. When object is compared to primitive, its coerced into primitive 
      4. Undefined and null are true 
  
  2. Binary operator +
    
    When string is present:
    a. 'number ' + 1      -> 'number 1'
    b. '' + [1, 2, 3]     -> '1,2,3'
    c. '' + {}            -> '[object Object]'
    d. '' + true          -> 'true'

    When number is present: 
    e. 1 + true           -> 2 true is coerced to number 1 
    f. 1 + false          -> 1 false coerced to 0 
    g. null + null        -> 0 
    h. 1 + undefined      -> NaN 

    When object is present:
    i. [1] + 2            -> '12'
    j. [1] + '2'          -> '12'
    k. 42 + {}            -> '42[object Object]'


  3. Relational Operators > < >= <= 

    a. 11 > '9'    -> true 9 is coerced to number 
    b. '11' > 9    -> true 11 is coerced to number 
    c. true > null -> true true = 1 null = 0 

