
const isevenlength = number => {
  const notostr = string(number);
  if (notostr.length % 2 === 0) {
    const halfpt = notostr.length / 2;
    const firsthalf = notostr.slice(0, halfpt);
    const secondhalf = notostr.slice(halfpt);
    if (firsthalf === secondhalf) return true;
  }
  return false;
};

const twice = number => {
  if (isnan(number)) return 'invalid input';
  if (isevenlength(number)) return number;
  return number * 2;
};

console.log(
  twice(37),          // 74
  twice(44),          // 44
  twice(334433),      // 668866
  twice(444),         // 888
  twice(107),         // 214
  twice(103103),      // 103103
  twice(3333),        // 3333
  twice(7676)        // 7676
);


