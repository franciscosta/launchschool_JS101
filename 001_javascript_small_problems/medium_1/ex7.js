
function fibonacci(n) {
  const fib = [1, 1];

  for (let i = 2; i < n; i += 1) {
    const first = fib[fib.length - 1];
    const second = fib[fib.length - 2];
    fib.push(first + second);
  }

  return fib[fib.length - 1];
}

console.log(
  fibonacci(20) === 6765,
  fibonacci(50) === 12586269025,
  fibonacci(75) === 2111485077978050
)
