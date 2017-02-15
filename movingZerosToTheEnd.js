/*
Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.
 */

function moveZeros(arr) {
  let zeros = 0;
  let result = [];
  arr.forEach((item) => {
    if(item === 0){
      zeros++;
    } else {
      result.push(item);
    }
  })
  for(let i=0;i<zeros;i++){
    result.push(0);
  }
  return result;
}
