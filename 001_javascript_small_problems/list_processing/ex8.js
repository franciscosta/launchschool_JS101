
function buyFruit (fruitList = []) {
  if (fruitList.length === 0) return [];

  let groceries = [];

  for (const item of fruitList) {
    const fruit = item[0];
    let quantity = item[1];

    while (quantity > 0) {
      groceries.push(fruit);
      quantity -= 1;
    }
  }

  console.log(groceries)
  return groceries;
}


buyFruit([['apple', 5]]);
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
