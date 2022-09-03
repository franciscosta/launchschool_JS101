
function letterPercentages(string) {

  const analysis = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for(const letter of string) {

    if (/[a-z]/.test(letter.toLowerCase())) {
      if (letter === letter.toLowerCase()) {
        analysis.lowercase += 1;
      } else {
        analysis.uppercase += 1;
      }
    } else {
      analysis.neither += 1;
    }
  }

  for(const key of Object.keys(analysis)) {
    analysis[key] = (analysis[key] / string.length * 100).toFixed(2);
  }

  return analysis;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
