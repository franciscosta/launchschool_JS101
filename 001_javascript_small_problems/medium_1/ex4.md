# Problem

What is a stack:
- A stack is a list of values
- that grows and shrinks dynamically.
- A stack may be implemented as an Array
- that uses two Array methods: .push and .pop

A stack-and-register language:
- A stack-and-register programming language
- is a language that uses a stack of values.

The register is like a current value:
- Each operation in the language operates on a register
- which can be thought of as the current value.
- The register is not part of the stack.

An operation on a stack-and-register:
- An operation that requires two values
- pops the topmost item from the stack
- (i.e., the operation removes the most
- recently pushed value from the stack),
- operates on the popped value and the register value,
- and stores the result back in the register.

The behavior of an operation:
- Consider a MULT operation in a stack-and-register language.
- It removes the value from the stack,
- multiplies the removed stack value with the register value,
- then stores the result back in the register

- For example, if we start with a stack of [3, 6, 4]
- (where 4 is the topmost item in the stack)
- and a register value of 7,
- the MULT operation mutates the stack to [3, 6] (the 4 is removed),
- and the result of the multiplication, 28, is left in the register.
- If we do another MULT at this point, the stack is mutated to [3],
- and the register is left with the value 168.

Operations in the language:
1. n : Place a value, n, in the register. Do not modify the stack.
2. PUSH : Push the register value onto the stack. Leave the value in the register.
3. ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
4. SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
5. MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
6. DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
7. REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
8. POP : Remove the topmost item from the stack and place it in the register.
9. PRINT : Print the register value.

ONLY INTEGERS:
- All operations are integer operations (which is only important with DIV and REMAINDER).

- Programs will be supplied to your language function via a string.
- Your function may assume that all arguments are valid programs
- i.e., they will not do anything like trying to pop a
- non-existent value from the stack
- they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

# Algorithm

1. Parts:
  - A program that translates the string into executable operations 
  - Convert the string into an array of words 
  - Traverse through the string:
    - try to convert each value into a number parseInt
      - if conversion is successful, store it as an integer 
    - if not, lower case the operation and store it in the list
  - Return the list of operations 

  Examples:

  '5 PUSH 3 MULT PRINT'
  '3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'

2. An object with all the different operations

