
function isItemAvailable(transactionID, listOfTransactions) {
  const matchingTransactions = transactionsFor(transactionID, listOfTransactions);

  let availableQuantity = 0;

  for (const item of matchingTransactions) {
    const movement = item.movement;
    const quantity = item.quantity;
    
    if (movement === 'in') availableQuantity += quantity;
    if (movement === 'out') availableQuantity -= quantity;
  }

  console.log(availableQuantity > 0);
  return availableQuantity > 0;
}


function transactionsFor(transactionID, listOfTransactions) {
  if (listOfTransactions.kength === 0) return [];

  let matchingTransactions = [];

  for (const transaction of listOfTransactions) {
    const currentID = transaction.id;
    if (currentID === transactionID) matchingTransactions.push(transaction);
  }

  return matchingTransactions;
};


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

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
