
function triangle(a, b, c) {
  const min = Math.min(a, b, c);
  const max = Math.max(a, b, c);
  const total = a + b + c;

  if (total !== 180 || min <= 0) return 'invalid';

  if (max === 90) return 'right';
  if (max > 90) return 'obtuse';
  return 'acute';
}

console.log(
  triangle(60, 70, 50),       // "acute"
  triangle(30, 90, 60),       // "right"
  triangle(120, 50, 10),      // "obtuse"
  triangle(0, 90, 90),        // "invalid"
  triangle(50, 50, 50),       // "invalid"
);
