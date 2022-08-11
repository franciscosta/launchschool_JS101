const thirdOccurrence = (char, string) => {
  if (char.length === 0 || string.length === 0) return null;
  let index = 0, occurrence = 0;
  for (let iterator = 0; iterator < string.length; iterator += 1) {
    if (occurrence === 3) break;
    if (string[iterator] === char) {
      occurrence += 1;
      index = iterator;
    }
  }
  if (occurrence < 3) return null;
  return index + 1;
}

console.log(
  thirdOccurrence('x', 'axbxcxdxex')
);
