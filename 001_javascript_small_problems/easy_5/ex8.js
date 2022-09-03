
const digitList = number => {

  const array = [];

  while (number > 0) {
    array.unshift(number % 10);
    number = parseInt(number / 10);
  }

  return array;
};

const digitList2 = number => {
  return String(number).split('').map( number => Number(number) );
};

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

console.log(
  digitList2(12345),
  digitList2(7),
  digitList2(375290),
  digitList2(444)
);
