/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character
appears more than once in the original string. Ignore capitalization when determining if a character
is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"
*/  

function duplicateEncode(word){
  word = word.toUpperCase();
  let counter = {};
  let result = '';
  
  for(let i = 0; i<word.length; i++) {
    let char = word.charAt(i)
    if(!counter[char]) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }   
  } 
  for(let j=0; j<word.length; j++) {
    if(counter[word.charAt(j)] === 1) {
      result += '(';
    } else if(counter[word.charAt(j)] > 1) {
      result += ')';
    }
  }
  return result;
}