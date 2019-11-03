function rotate(array, k) {
  var next;
  for (var i = 0; i < k; i++) {
    next = array.shift();
    array.push(next);
  }
  return array;
}


function rotate2(array, k) {
  var array1 = array.slice(0, k);
  var array2 = array.slice(k);
  return array2.concat(array1);
}


var array = [1,2,3,4,5,6];

console.log(rotate(array, 2));
console.log(array);
