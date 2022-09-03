# Problem

- Write a function that takes two arguments
  - an inventory item ID
  - a list of transactions
- and returns an array 
  - containing only the transactions for the specified inventory item

1. Input: 
  - an integer: inventoryID
  - an array of objects: list of transactions 
2. Output:
  - a reduced array of only the items in list of transactions
  - items that match the ID 
3. Edge-cases:
  - can the ID be invalid?
    - yes: return your id is invalid 
  - can the list of transactions be empty?
    - yes: return no transactions found

# Example

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


# Data Structure

Array + Object

# Algorithm

1. Guards:
  - if the list of transactions is empty: return [] 
2. Set matchingTransations = []
3. Iterate through list of transactions:
  - if current transaction has matching ID append to matchingTransations
4. Return matchingTransations
