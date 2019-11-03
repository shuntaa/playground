function AlphabetSoup(str) { 
  var letters = str.split("");
  var changedletters = letters.sort(function(a,b){
    a = a.toLowerCase(); 
    b = b.toLowerCase();
    if (a < b) {
      return -1; 
    }
    else if (a >b) {
      return 1;
    }
    else return 0;
  }); 
  var result = changedletters.join("");  

  return result; 
         
}
   
// keep this function call here 
console.log(AlphabetSoup("Hello"));
