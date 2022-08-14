

const meanAvg = collectionOfNumbers => {
  if (collectionOfNumbers.length === 0) return 0;
  return collectionOfNumbers.reduce( (accomulator, element) => {
    return accomulator += element;
  }, 0) / collectionOfNumbers.length;
};

const letterGrade = grade => {
  switch (true) {
    case grade < 60:
      return 'F';
    case (grade >= 60 && grade < 70):
      return 'D';
    case (grade >= 70 && grade < 80):
      return 'C';
    case (grade >= 80 && grade < 90):
      return 'B';
    case (grade >= 90 && grade <= 100):
      return 'A';
  }
};

const getGrade = (grade1, grade2, grade3) => {
  const grades = [grade1, grade2, grade3];
  const mean = meanAvg(grades);
  return letterGrade(mean);
};

console.log(
  getGrade(95, 90, 93),    // "A"
  getGrade(50, 50, 95),    // "D"
);
