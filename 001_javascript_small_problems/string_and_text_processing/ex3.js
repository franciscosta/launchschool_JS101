
function letterCaseCount(string) {

  const counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  if (string.length === 0) return counts;

  for (const letter of string) {
    counts[identifyLetterCase(letter)] += 1;
  }

  return counts;
}

function identifyLetterCase(letter) {
  if (!/[a-zA-Z]/.test(letter)) return 'neither';

  switch (true) {
    case letter.toLowerCase() === letter:
      return 'lowercase';
    default:
      return 'uppercase';
  }
}

console.log(
  letterCaseCount('abCdef 123'),  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef'),    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123'),         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount(''),            // { lowercase: 0, uppercase: 0, neither: 0 }
);

