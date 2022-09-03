
function triangle(a, b, c) {

  const min = Math.min(a, b, c);
  const max = Math.max(a, b, c);

  if (min <= 0) return 'invalid';
  if (a + b + c - max < max) return 'invalid';

  const triangle = { 1: 'equilateral', 2: 'isosceles', 3: 'scalene' };
  const sides = [...new Set([a, b, c])].length;

  return triangle[sides];
}

console.log(
  triangle(3, 3, 3),        // "equilateral"
  triangle(3, 3, 1.5),      // "isosceles"
  triangle(3, 4, 5),        // "scalene"
  triangle(0, 3, 3),        // "invalid"
  triangle(3, 1, 1),        // "invalid"
);
