function SimpleAdding(num) { 
  var result = 0; 
  for (var i = 1; i <= num; i++){
    result += i; 
  }
  return result; 
}
// keep this function call here 
SimpleAdding(10);                            
console.log(SimpleAdding(1000000)); 
