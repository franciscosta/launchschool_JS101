/*

PROBLEM WRITE-UP

  Build a program that asks the user to enter the length
  and width of a room in meters, and then logs the area
  of the room to the console in both square meters and 
  square feet.

  Note: 1 square meter == 10.7639 square feet

  Do not worry about validating the input at this time. 
  Use the readlineSync.prompt method to collect user input.

  Example:

  Enter the length of the room in meters:
  > 10
  Enter the width of the room in meters:
  > 7
  The area of the room is 70.00 square meters (753.47 square feet).


PEDAC

  1. Problem

    1. Input: two numbers submited by the user via the console
    2. Output: 
      a. No formal output
      b. It logs the output onto the console
      c. Returns a sentence with the area of a room in sq meters and sq feet

    3. Initial Question:
      a. Are the two numbers in the input guaranteed to be integers? Yes
      b. There is no need to validate the input at this time
      c. Use specifically the readlyneSync.prompt method
    
    4. The program the user for the length and then the width of a room in meters
    5. It then calculates the area both:
      a. in meters
      b. in feet

  
  2. Examples

    Enter the length of the room in meters:
    > 10
    Enter the width of the room in meters:
    > 7
    The area of the room is 70.00 square meters (753.47 square feet).

  
  3. Data Structure

    1. Will I need a data structure for this problem?
    2. I could store the key information about this room in an object
    3. For the sake of future readability
    4. In fact, the entire program could be contained inside a room object
    5. With its properties such as width and length in meters
    6. As well as their equivalents in feet
    7. And methods that return its square footage

  
  4. Algorithm

    1. Ask for a number:  
      a. Import readline-sync
      b. Ask for input
      c. Convert it into a number

    2. Convert square meters to square feet:
      a. Multiply the meters by the feet_in_meters constant

    3. Ask user for width and length
    4. Calculate square meters by multiplying the two
    5. Convert square meters to feet by means of step. 2
    
  
  5. Code with Intention

    1. Define a function that asks for a number from the user
    2. Define a generic function that converts square meters to square feet
    3. Define an object that contains propeties for width, length, sqMeters and sqFeet
    4. Populate the object with the width / length using the ask function
    5. Populate the object with all four properties using the functions above
    6. Log result onto the console

*/

// 1. Helper methods

const askANumber = question => {
  const readline = require('readline-sync');
  return Number(readline.question(question));
}

const sqMtoSqF = squareMeter => {
  const SQUARE_FEET_IN_SQUARE_METER = 10.7639;
  return squareMeter * SQUARE_FEET_IN_SQUARE_METER;
}

const room = {
  width: 0,
  length: 0,
  squareMeters: 0,
  squareFeet: 0
}

room.width = askANumber('Enter the width of the room in meters:\n> ');
room.length = askANumber('Enter the length of the room in meters:\n> ');
room.squareMeters = room.width * room.length;
room.squareFeet = sqMtoSqF(room.squareMeters);

console.log(`The area of the room is ${room.squareMeters.toFixed(2)} square meters (${room.squareFeet} square feet).`);

