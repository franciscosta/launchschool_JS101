# Problem

- Write a program that prints the longest sentence in a string
- based on the number of words.

- Sentences may end with
  - periods (.)
  - exclamation points (!)
  - or question marks (?).

- You should treat any sequence of characters that:
  - are not spaces
  - or sentence-ending characters as a word.
  - Thus, -- should count as a word.

- Log the longest sentence and its word count to the console.
  - Preserve the punctuation from the end of the sentence.

- Note that this problem is about manipulating and processing strings.
- As such, every detail about the string matters
- (e.g., case, punctuation, tabs, spaces, etc.)


# Algorithm

1. Split the text into an array of sentences 
2. Reduce to the longest sentence 
3. Split the resulting sentence into words
4. Print the sentence and the wordcount


sentence.split(/(?<=[.?!])/)
