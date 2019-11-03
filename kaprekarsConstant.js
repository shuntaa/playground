var count = 1;

function KaprekarsConstant(num) { 

  // code goes here  
  var string = num.toString();
  while (string.length < 4){
    string ="0"+ string;
  }
  var sorted = string.split("").sort();
  var ascending = parseInt(sorted.join(""));
  var descending = parseInt(sorted.reverse().join(""));
  var diff = descending - ascending;
  if (diff !== 6174){
    KaprekarsConstant(diff); 
    count++;
  }
  return count;
}
   
// keep this function call here 
console.log(KaprekarsConstant(9831));
