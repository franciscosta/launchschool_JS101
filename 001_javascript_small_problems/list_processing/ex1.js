
const sum = number => {
  return String(number).split('').reduce( (accomulator, number) => {
    return accomulator + Number(number);
  }, 0);
};

console.log(
  sum(23),
  sum(469),
  sum(123456789)
);
