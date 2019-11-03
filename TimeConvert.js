function TimeConvert(num) { 

  // code goes here  
  var quotient = Math.trunc(num/60);
  var remainder = num % 60; 
  var result = quotient + ":" + remainder       
  return result; 
}
   
// keep this function call here 
console.log(TimeConvert(23));                            

