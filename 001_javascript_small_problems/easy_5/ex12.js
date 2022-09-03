
const afterMidnight = time => {
  time = time.split(':').map( number => Number(number) );
  const minutesInDay = time[1] === 0 ? 0 : 60
  return time[0] * minutesInDay + time[1];
}

const beforeMidnight = time => {
  time = time.split(':').map ( number => Number(number) );
  const hoursInDay = time[0] === 0 ? 0 : 23;
  const minutesInDay = time[1] === 0 ? 0 : 60
  return (hoursInDay - time[0]) * minutesInDay + (minutesInDay  - time[1]);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);

console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);

console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
