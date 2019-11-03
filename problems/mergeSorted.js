function merge(array1,array2) {
  var array = [];
  var i = 0;
  var j = 0;
  while (i < array1.length || j < array2.length) {
    if (i >= array1.length || j >= array2.length) {
      break; 
    }
    if (array1[i] < array2[j]) {
      array.push(array1[i]);
      i++;
    }
    else {
      array.push(array2[j]);
      j++;
    }
  }
  if (i < array1.length) {
    array = array.concat(array1.slice(i));
  }
  if (j < array2.length) {
    array = array.concat(array2.slice(j));
  }
  return array;
}

function merge2(array1, array2) {
  var result = array1.concat(array2);
  return result.sort(function(a, b) {
    return a-b;
  }); 
}

function measure(func, p1, p2) {
  var start = new Date();
  var result;
  for (var i = 0; i < 10000; i++) {
    result = func(p1, p2);
  }
  var end = new Date();
  console.log(end - start);
  console.log(result);
  return result;
}

var array1 = [10, 40, 60, 70, 81, 82, 92, 102, 103, 201];
var array2 = [2, 3, 5, 7, 8, 10, 114, 199];

measure(merge, array1, array2);
measure(merge2, array1, array2);

/*result =  merge2(array1,array2);
console.log(measure());
console.log(result);*/
