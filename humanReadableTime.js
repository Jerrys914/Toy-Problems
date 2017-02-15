/*
Write a function, which takes a non-negative integer(seconds) as input and 
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
  let mins = 0;
  let hours = 0;
  let secs = 0;
  
  if(seconds < 60) {
    return format(hours) + ':' + format(mins) + ':' + format(seconds)
  } else {
    mins = Math.floor(seconds / 60);
    secs = Math.floor(seconds % 60); 
    if(mins >= 60) {
      hours = Math.floor(mins/60);
      mins = Math.floor(mins % 60);
    }
    return format(hours) + ':' + format(mins) + ':' + format(secs);
  }
  function format(num){
    if(num < 10) {
      num = '0' + num;
    }
    return num + '';
  }
}