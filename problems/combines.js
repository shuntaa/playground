function combine(array1, array2) {
  var array = [];
  for (var i = 0; i < array1.length; i++ ) {
    array.push(array1[i]); 
    array.push(array2[i]); 
  }
  return array;
}

var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];
var array3 = ["a", "b", "c"];
var array4 = [1, 2, 3];

console.log(combine(array1, array2));
console.log(combine(array3, array4));


