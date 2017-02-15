function allAnagrams (string) {
  let results = {};  
  const findAnagrams = (choices, options) => {
    if(choices.length === string.length) {
      results[choices] = true;
    } else {
      for(let i=0; i< options.length; i++) {
        findAnagrams(choices + options[i], options.slice(0, i) + options.slice(i + 1));
      }
    }
  }
  findAnagrams('', string);
  return Object.keys(results);
};