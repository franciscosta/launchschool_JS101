# Problem

- Write a function that 
- takes a string as an argument
- returns that string with a staggered capitalization scheme. 
  - Every other character 
  - starting from the first
  - should be capitalized
  - should be followed by a lowercase or non-alphabetic character. 
  - Non-alphabetic characters should not be changed, 
  - but should be counted as characters for determining when to switch between upper and lower case.

1. Input: A string
2. Output: A string 
  a. Every other character is capitalized
  b. First is always upper case, second lower, third upper ...
  c. The current case does not matter
  d. Non alphabetic characters should not be changed
  e. But should be counted as characters for the case change

3. Rules:
  a. Casing is always changing
    - Can be done with even and odd placement of the characcter
    - Odd indexes become uppercase
    - Even indexes become lowercase
  b. Then I determine if the character is alphabetic
  c. Then I determine the casing of the character 
  d. Depending on the casing, I turn it into what it needs to become 

# Examples

I Love Launch School!
-> I LoVe lAuNcH ScHoOl!

ALL_CAPS
-> AlL_CaPs

ignore 77 the 4444 numbers
-> IgNoRe 77 ThE 4444 nUmBeRs

# Data Structure
- String

# Algorithm

1. Set a variable called newString to an empty string 
2. Iterate through the string 
3. If index is odd: convert to upper 
4. If index is even: convert to lower 
