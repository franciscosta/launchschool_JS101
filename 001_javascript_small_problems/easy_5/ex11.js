
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const removeDays = hours => {
  
  if (hours < 24) return hours;

  const daysInHours = parseInt(hours / HOURS_IN_DAY);
  const leftOverHours = hours - (daysInHours * HOURS_IN_DAY);

  return leftOverHours;
};

const sanitizeTime = number => String(number).padStart(2, '0');

const timeOfDay = number => {

  const inputIsPositive = number >= 0;
  const time = { hours: 0, minutes: 0 };
  const absMinutes = Math.abs(number);

  let hours = parseInt(absMinutes / MINUTES_IN_HOUR);
  let minutes = absMinutes - (hours * MINUTES_IN_HOUR);

  hours = removeDays(hours);

  if (inputIsPositive) {
    time.hours = hours;
    time.minutes = minutes;
  } else {
    time.hours = HOURS_IN_DAY - hours - 1;
    time.minutes = MINUTES_IN_HOUR - minutes;
  }

  time.hours = sanitizeTime(time.hours);
  time.minutes = sanitizeTime(time.minutes);
  const clock = `${time.hours}:${time.minutes}`

  return clock;
};

console.log(
  timeOfDay(0),
  timeOfDay(-3),
  timeOfDay(35),
  timeOfDay(-1437),
  timeOfDay(3000),
  timeOfDay(800),
  timeOfDay(-4231),
);

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
