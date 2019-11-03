var array1 = [1,2,3,4,5];
var array2 = [10,20,30,40,50];


function reverse1(array) {
  var list = [];
  for (var i = 0; i < array.length; i++){
    list.push(array[array.length - 1 - i])
  }
  return list;
}

function reverse2(array) {
  var list = [];
  for (var i = array.length - 1; i >= 0; i--){
    list.push(array[i])
  }
  return list;
}

function reverse3(array) {
  var list = [];
  for (var i = 0; i < array.length; i++){
    list.unshift(array[i])
  }
  return list;
}
function reverse4(array) {
  var list = [];
  for (var elem of array){
    list.unshift(elem)
  }
  return list;
}
function reverse5(array) {
  return array.reverse();
}
console.log(reverse5(array1));

console.log(reverse5(array2));

