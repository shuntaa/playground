function concatnate(array1, array2) {
  for (var elem of array2) {
    array1.push(elem); 
  }
  return array1;
}

var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];

console.log(concatnate(array1, array2));


console.log(array1.concat(array2));
