function add(digits1, digits2) {
  var result = [];
  var sum;
  var carry = 0;
  var i;
  var left = [];
  if (digits1.length >= digits2.length) {
    i = digits2.length -1;
    for (var j = 0; j < digits1.length - digits2.length; j++) {
       left.push(digits1[j]); 
    }
  }

  else {
    i = digits1.length -1;
    for (var j = 0; j < digits2.length - digits1.length; j++) {
       left.push(digits2[j]); 
    }
  }

  for (; i >= 0; i--) {
    sum = digits1.pop() + digits2.pop() + carry;
    carry = 0;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    }
    result.unshift(sum);
  }

  for (var k = left.length - 1; k >= 0; k--) {
    left[k] += carry;
    carry = 0;
    if (left[k] > 9) {
      left[k] -= 10;
      carry = 1;
    }
  }
  
  if (carry === 1) {
    left.unshift(carry);
  }
  return left.concat(result);
}
console.log(add([8,1],[9,9,4,5]));
