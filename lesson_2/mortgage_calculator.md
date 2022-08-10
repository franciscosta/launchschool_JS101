
# Input: 
  1. Loan Amount -> Number
  2. Annual Percentage Rate (APR) -> Number 
  3. Loan Duration -> Number (months?)

# Output: 
  1. Returns a number representing monthly payment -> $321.00

# Rules/Edges:
  1. From input I need to calc:
    a. Monthly Interest Rate 
    b. Loan duration in years 
  2. Formula:

    let m = p * ( j / (1 - Math.pow(1 + j), (-n)))

    m -> monthly payment
    p -> loan amount 
    j -> monthly interest rate 
    n -> loan duration in months 

  3. Hints:
    a. Decide the format of the input
    b. APR needs to be converted into monthly interest rate 
    c. Loan duration needs to be in months in the end 
    d. Consider edge cases:
      a. Non-Interest Loans 
      b. Loans that aren't for integer number of years


# Test case 

mortgageCalculator(
  loan: 100000, 
  loanTerm: 10 years,
  APR: X
);

# Algorithm

  1. Components:
    1. A method that converts years into months 
      a. Get years as an integer 
      b. SET months = 0
      b. Loop from 1 to years:
        a. for each iteration months += 12
    2. A method to convert APR into interest rate 
    3. A method to get all data from the user:
      a. An object to contain all aspects of the loan 
      b. A sub-method to get and validate input 

