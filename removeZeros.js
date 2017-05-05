/*
  Sort "array" so that all elements with the value of zero are moved to the
  end of the array, while the other elements maintain order.
  [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  Zero elements also maintain order in which they occurred.
  [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  Do not use any temporary arrays or objects. Additionally, you're not able
  to use any Array or Object prototype methods such as .shift(), .push(), etc

  the correctly sorted array should be returned.
*/
const removeZeros = (array) => {
  let n = array.length
  let x = 1;
  for(let i=0;i<n;i++){
    if(array[i]==0 && x<n){
      for(let k=i;k<array.length; k++){
        if(array[k+1] !== undefined){
          let temp = array[k];
          array[k] = array[k+1];    
          array[k+1] = temp;
        }
      }
      i--;
    }
    x++;
  }
  console.log('end: ', array[array.length-1])
  return array;
}