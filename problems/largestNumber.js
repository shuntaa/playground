var array = [1,8,3,10,6,4,7,5,2,9];
function max(array){
  var max = array[0];
  for (var i = 0; i < array.length; i++){
    if (max <= array[i]){
      max = array[i];
    }
  }
  return max;
}
console.log(max(array));

