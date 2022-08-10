/*

PROBLEM WRITE-UP

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

PEDAC

  1. Problem 
    
    1. Input: 
      1.1: An Array: 2 or more elements that add up to a person's name
      1.2: An Object: two keys: title + occupation + appropriate values
    2. Output:
      2.1: Log a string to the console greeting the user
    3. Do I need to validate input? Yes

  2. Example:

      console.log(
        greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
      );
      // logs Hello, John Q Doe! Nice to have a Master Plumber around.

  3. Data Structure:

    N/A

  4. Algorithm:

    1. Validate both the array and the object.
    2. Combine the Array into a single name
    3. Interpolate all values into a single string
    4. Return it to the console

  5. Code

 */

const greetings = (arrayName, objectJob) => {
  if (arrayName.length === 0 || Object.keys(objectJob).length === 0) return 'Incorrect input';
  const fullName = arrayName.join(' ');
  const title = objectJob.title;
  const occupation = objectJob.occupation;
  const greet = `Hello, ${fullName}! Nice to have a ${title} ${occupation}.`;
  return greet;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);







