# Problem

- Modify the function from the previous exercise 
- so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. 
- The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

# Algorithm

1. Set a uppercase variable to true;
2. in the loop:
  - if (isAlphabetic) :
    - if (uppercase):
      - make uppercase
      - toggle uppercase var to false 
    - else:
      - make lowercase 
      - toggle lowercase var to true 
