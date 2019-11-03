function sum1(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]; 
  }
  return sum;
}


function sum2(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum += array[i]; 
    i++;
  }  
  return sum;
}

function sum2_1(array) {
  var sum = 0;

  while (array.length > 0) {
    sum += array[0]; 
    array.shift();
  }  
  return sum;
}

function sum3(array) {
  if (array.length === 1) {
    return array[0]
  }
  else {
    var head = array.shift();
    return head + sum3(array);
  }
}
console.log(sum2_1([1,2,3,4,5,10]));
