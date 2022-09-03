
const average = array => {
  return parseInt( array.reduce( (number, accomulator) => {
    return accomulator += number;
  },0) / array.length )
};

console.log(
  average([1, 5, 87, 45, 8, 8]),       // 25
  average([9, 47, 23, 95, 16, 52])    // 40
);
