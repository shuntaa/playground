function FirstFactorial(num) { 

  // code goes here  
  var result = 1; 
  for (var i = 1; i <= num; i++) {
  //result = result*i; 
  result *= i;
  }
  return result; 
}
   
// keep this function call here 
console.log(FirstFactorial(5)); 
