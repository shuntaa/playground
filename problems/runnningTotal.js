function total(array){
  var result = 0;
  for (var i = 0; i < array.length; i += 1){
   result += array[i]; 
  }
  return result;
}

function total2(array){
  var result = 0;
  for (var elem of array){
   result += elem; 
  }
  return result;
}

console.log(total2([1,2,3,4,5]))
