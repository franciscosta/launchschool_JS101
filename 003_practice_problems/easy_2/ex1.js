
// Given a string, return a new string that replaces 
// every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Approach 1:
// Convert string to array
// Iterate through items in array
// replace instances
// join the array into a string 

const array = advice.split(' ');
array.forEach( (word, index) => {
  if ( word === 'important' ) array[index] = 'urgent';
});
const newAdvice = array.join(' ');
console.log(newAdvice);

// Approach 2: Launch School suggestion
// Use the replace method 
// Yet only replaces first instance 
const moreAdvice = advice.replace('important', 'urgent');
console.log(moreAdvice);
