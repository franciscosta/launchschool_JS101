
# Problem
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

1. Input: Floating Point number 
  a. Represents an angle between 0 and 360 
2. Returns: A string that represents the angle:
  a. in degrees, minutes, and seconds 
  b. ˚ for degrees, ' for minutes, " for seconds 
3. Rules:
  a. There are 60 minutes in a degree 
  b. There are 60 seconds in a minute 

Output:
-> degrees˚minutes'secons"

Formula:
d = integer(30.263888889°) = 30°
m = integer((dd - d) × 60) = 15'
s = (dd - d - m/60) × 3600 = 50"

# Examples
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
