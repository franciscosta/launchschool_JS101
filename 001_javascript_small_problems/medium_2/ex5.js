
function featured(number) {
  const MAX_FEATURED = 9876543201;

  for(let n = number + 1; n <= MAX_FEATURED; n += 1) {
    if (isFeatured(n)) return n;
  }

  return 'There is no possible number that fulfills those requirements.'
}

function isFeatured(number) {
  if (number % 2 === 0) return false;
  if (number % 7 !== 0) return false;
  const numberAsString = String(number);
  const uniqueDigits = [...new Set(numberAsString.split(''))];
  return numberAsString.length === uniqueDigits.length;
}

console.log(
  featured(12),           // 21
  featured(20),           // 21
  featured(21),           // 35
  featured(997),          // 1029
  featured(1029),         // 1043
  featured(999999),       // 1023547
  featured(999999987),    // 1023456987
  featured(9876543186),   // 9876543201
  featured(9876543200),   // 9876543201
  featured(9876543201),
)
