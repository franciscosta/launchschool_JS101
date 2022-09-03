# Problem

- Some people believe that 
- Fridays that fall on the 13th day of the month are unlucky days. 

- Write a function that takes a year as an argument 
- and returns the number of Friday the 13ths in that year. 
- You may assume that the year is greater than 1752, 
- which is when the United Kingdom adopted the modern Gregorian Calendar. 
- You may also assume that the same calendar will remain in use for the foreseeable future.

1. Input: a year in the form of an integer 
2. Output: the number of times friday happens on a day 13
3. Questions:
  - Can I use the date object? No. Just logic.
3. Boundaries:
  - A friday happens every 7th day 
  - 


# Examples

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

# Data Structure

Date object 

# Algorithm

1. Get year variable 
2. Set a counter to zero:
3. Iterate from 1 to 12 inclusive 
4. Create a new date object and check if it === 5
5. if so, increase counter 
6. return counter 
