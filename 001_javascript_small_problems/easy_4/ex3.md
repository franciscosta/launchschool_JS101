
# Problem

  1. Build a program that logs when the user will retire
  2. And how many more years the user has to work until retirement.

  1. Input: 
    a. Ask user for age in number form 
    b. Ask user what age she'd like to retire 
  2. Output: 
    a. Log current year + year of retirement 
    b. Log how many years until retirement 
  3. Rules/Edge-cases:
    a. Validate input 

# Example

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

# Data Structure 
  
  1. Numbers
  2. The date object to get current year 

# Algorithm

  1. A function to get user input and validate it 
  2. A function:
    a. Get age = ask()
    b. Get ageOfRetirement = ask()
    c. Set currentYear = Math.currentyear 
    d. Set yearToRetirement = ageOfRetirement - age
    e. Log = Its year. You will retire in year + yearToRetirement
    f. Log = You have only yearToRetirement of work to go!




