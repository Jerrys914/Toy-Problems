/*  
  Longest Substring Without Repeating Characters
  Given a string, find the length of the longest substring without repeating characters.
  Examples:
  Given "abcabcbb", the answer is "abc", which the length is 3.
  Given "bbbbb", the answer is "b", with the length of 1.
  Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
  *
  * @param {string} s
  * @return {number}
*/
const lengthOfLongestSubstring = s => {
    let result = 0;
    let longesSubStr = '';
    let recurse = (temp, substr) => {
      if(temp.includes(substr[0])){
        if(temp.length > longesSubStr.length){
          longesSubStr = temp
        }
        return
      }
      for(let i=0;i<substr.length;i++){
        recurse(temp.substring(i,temp.length)+substr[i],substr.substring(i+1,substr.length));
      }
    }
    recurse('',s);
    return longesSubStr.length;
};