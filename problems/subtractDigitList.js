function subtract(digits1, digits2) {
  var result = [];
  var diff;
  var carry = 0;
  var i;
  var left = [];
  var negative = false;

  if (digits1.length < digits2.length) {
    var tmp = digits1;
    digits1 = digits2;
    digits2 = tmp;
    negative = true;
  }

  for (var j = 0; j < digits1.length - digits2.length; j++) {
    left.push(digits1[j]); 
  }

  /*else {
    i = digits1.length -1;
    for (var j = 0; j < digits2.length - digits1.length; j++) {
       left.push(digits2[j]); 
    }
  }*/


  i = digits2.length -1;
  for (; i >= 0; i--) {
    diff = digits1.pop() - digits2.pop() - carry;
    carry = 0;
    if (diff < 0) {
      diff += 10;
      carry = 1;
    }
    result.unshift(diff);
  }

  for (var k = left.length - 1; k >= 0; k--) {
    left[k] -= carry;
   carry = 0;
    if (left[k] < 0) {
      left[k] += 10;
      carry = 1;
    }
  }
  
  result = left.concat(result);
  if (negative) {
    result.shift();
    result.unshift("-");
    return result;
  } 
  else {
    return result; 
  }
}
console.log(subtract([7,3],[1,3,5]));
