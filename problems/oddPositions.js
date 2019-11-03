function odd(array) {
  var result = [];
  for (var i = 0; i < array.length; i += 2) {
    result.push(array[i]);
  }
  return result;
}

console.log(odd([1,3,4,6,8,9]));
