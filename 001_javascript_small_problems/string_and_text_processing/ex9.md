# Problem

- Write a function that takes two arguments
  - a word
  - a string of text
- returns an integer
  - representing the number of times the word appears in the text
- You may assume that the word and text inputs will always be provided
- and that all word breaks are spaces
- Thus, some words will include punctuation such as periods and commas. 
- Also assume that the search is case-insensitive

1. Input: a word and a sentence 
2. Output: the number of occurrences of said word in sentence 
3. Boundaries:
  - both inputs are always provided 
  - words in the sentence are space separated
  - some words might include punctuation 
  - search is case-insensitive 

# Examples

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

# Data Structure
String 

# Algorithm

0. Set occurrences = 0
1. Iterate through the array 
  - as I iterate, stop every time you find the first letter of my words
  - preceded by an empty space 
  - in such instances, iterate through the characters following that to see if its a match
    - if so, increase occurrences by 1


