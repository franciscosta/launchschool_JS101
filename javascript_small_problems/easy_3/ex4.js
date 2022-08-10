
const memo = {};
const fib = number => {
  if (memo[number]) return memo[number];
  if (number <= 1n) return number;
  else return memo[number] = fib(number - 1n) + fib(number - 2n);
};

const findFibonacciIndexByLength = number => {

  let index = 1n;
  let found = false;

  while (!found) {
    if (String(fib(index)).length === Number(number)) {
      found = true;
    } else {
      index += 1n;
    }
  }
 
  return index;
};

console.log(
  findFibonacciIndexByLength(2n),
  findFibonacciIndexByLength(3n),
  findFibonacciIndexByLength(10n),
  findFibonacciIndexByLength(16n),
  findFibonacciIndexByLength(100n),
  findFibonacciIndexByLength(1000n),
  findFibonacciIndexByLength(10000n)
);
