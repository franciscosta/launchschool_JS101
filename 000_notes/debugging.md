# Debugging

## Temperament
1. Most of the time, as programmers we spend out time on the problem.
2. Learning to deal with a constant stream of broken things is essential.
3. Developing the temperament to be systematic about trying to find solutions.
4. Becoming better at handling feelings of frustration.

## Error Messages
1. Reading the stack trace output onto the console when the program fails

## Resources
1. Google the relevant error message in the stack trace 
2. Stack Overflow -> same as above 
3. Documentation -> Go over relevant parts of MDN

## Debugging Steps
1. Reproduce the error
2. Determining the boundaries of the error 
  a. What caused the error? 
3. Trace the code:
  a. Console.logging until you find where it's happening
4. Understand the problem well
5. Implement a fix
6. Test the fix 

## Node debugger 
1. `node inspect file.js`
2. Watch a video on how to use the node debugger 

## Errors
1. When Javascript cannot continue, it creates an Error object:
  a. Reference Error: a variable that does not exist
  b. Type Error: re-assigning a const, accessing smth that doesn't exist.. 
  c. Syntax Error: mistyped javascript syntax 

## Prevent Errors
1. Guard Clause:
  a. Used when a function can't trust its arguments
  b. An if statement at the start to check validity of input
2. Examine inherent assumptions in my code
  a. An argument that I cannot trust to always be accurate 
  b. Edge cases I'm not accounting for 
3. Writing all kinds of test cases ahead of coding 

## Catching Errors
1. Some javascript methods throw exceptions. 
2. In some cases, there is no practical way to predict them.
3. Therefore we use try/catch/finally
  a. Try: the error prone statement goes here
  b. Catch (error): this code runs if there is an error
    1. Usually useful to log the error onto the console
  c. Finally: This always runs, with or without an error (optional clause)



