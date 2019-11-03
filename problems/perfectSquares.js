function square(a) {
  return a*a;
}

function createArray(size) {
  var array = [];
  for (var i = 1; i <= size; i++) {
    array.push(i);
  }
  return array;
}

function on_all(array, func) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(func(array[i])); 
  }
  return result; 
}

var nums = createArray(20); 

//console.log(on_all(nums, square));
console.log(nums.map(x => x*x));
