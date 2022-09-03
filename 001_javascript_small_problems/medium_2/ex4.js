
function fridayThe13ths(year) {
  const monthsInYear = 12;
  let friday13Counter = 0;

  for (let month = 1; month <= monthsInYear; month += 1) {
    const date = new Date(`${month} 13 ${year}`);
    if (date.getDay() === 5) friday13Counter += 1;
  }

  return friday13Counter;
}

console.log(
  fridayThe13ths(1986),      // 1
  fridayThe13ths(2015),      // 3
  fridayThe13ths(2017),      // 2
);
