/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
let total=256;
function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  let dummy=new Array(total);
  if(str1.length!=str2.length){
    return false;
  }
  for(let i=0;i<total;i++){
    dummy[i]=0;
  }
  for(let i=0;i<str1.length;i++){
    dummy[str1[i].charCodeAt(0)]++;
    dummy[str2[i].charCodeAt(0)]--;
  }
  for(let i=0;i<total;i++){
    if(dummy[i]!=0){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
