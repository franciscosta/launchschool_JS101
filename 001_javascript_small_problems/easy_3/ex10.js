
const yearToCentury = year => {
  const yearString = String(year).padStart(4, '0');
  const halfPt = yearString.length / 2;
  const lhs = yearString.slice(0, halfPt);
  const rhs = yearString.slice(halfPt);
  let century = parseInt(lhs);
  if (parseInt(rhs) > 1) century += 1;
  return century;
};

const century = year => {

  let century = String(yearToCentury(year));
  const lastDigit = Number(century) % 10;

  switch (true) {
    case lastDigit === 1:
      century += 'st';
      break;
    case lastDigit === 2:
      century += 'nd';
      break;
    case lastDigit === 3:
      century += 'rd';
      break;
    default:
      century += 'th';
  }

  return century;
}

console.log(
  century(45),
  century(100),
  century(2045)
);
