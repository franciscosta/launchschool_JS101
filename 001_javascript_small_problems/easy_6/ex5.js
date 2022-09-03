const negative = number => number >= 0 ? -number : number;

console.log(
  negative(5),     // -5
  negative(-3),    // -3
  negative(0),     // -0
);
