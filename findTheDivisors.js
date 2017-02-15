/*
Create a function named divisors that takes an integer and 
returns an array with all of the integer's divisors(except for 1 and the number itself). 
If the number is prime return the string '(integer) is prime' 
*/

function divisors(integer) {
  let result = [];
  for(let i=2; i<integer; i++) {
    if(integer % i === 0) {
      result.push(i);
    }
  }
  if(result.length === 0) {
    return integer + ' is prime';
  } else {
    return result;
  }
};