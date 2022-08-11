const stringy = number => {

  let string = '';
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 === 0) string += '0';
    else string += '1';
  }
  return string;
};

console.log(
  stringy(6),
  stringy(3),
  stringy(1),
  stringy(0)
);
