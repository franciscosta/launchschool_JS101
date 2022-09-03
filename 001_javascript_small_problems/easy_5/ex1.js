/*

There are 60 minutes in a degree, and 60 seconds in a minute.

dms(76.73);        // 76°43'48"

76 degrees 
76.73 - 76 = 0.73 * 60 = 43.8 + parseInt = 43 minutes 
0.8 * 60 = 48 seconds

dms(93.034773);    // 93°02'05"

93 degrees 
93.034773 - 93 = .034773 * 60 = 2.08638 + parseInt = 2 minutes 
0.08638 * 60 = 5.1828 = 5 seconds 

*/


const dms = decimalDegree => {

  const degree = {
    degrees: 0,
    minutes: 0,
    seconds: 0 
  }

  let leftover;

  degree.degrees = parseInt(decimalDegree); // 93
  leftover = decimalDegree - degree.degrees; // 0.034773

  degree.minutes = parseInt(leftover * 60);  // 2
  leftover = leftover * 60 - degree.minutes; // 0.8638

  degree.seconds = parseInt(leftover * 60); // 5 


  degree.degrees = String(degree.degrees).padStart(2, '0');
  degree.minutes = String(degree.minutes).padStart(2, '0');
  degree.seconds = String(degree.seconds).padStart(2, '0');

  const result = `${degree.degrees}˚${degree.minutes}'${degree.seconds}"`

  console.log(result);

  return result;

};

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
