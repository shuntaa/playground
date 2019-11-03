function LetterChanges(str) { 

  // code goes here  
  var changedLetters = "";
  var changedLetter; 
  
  for (var i = 0; i < str.length ; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      var code = str.charCodeAt(i);
      code += 1;
      changedLetter = String.fromCharCode(code);
      if (/[aeiou]/.test(changedLetter)) {
        changedLetter = changedLetter.toUpperCase();
      }
      changedLetters += changedLetter;
    }
    else {
      changedLetters += str[i];
    }
  }
         
  return changedLetters; 
}
   
// keep this function call here 
console.log(LetterChanges("abcd!123"));     
