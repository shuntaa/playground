function subtract(digits1, digits2) {
  var result = [];
  var diff;
  var carry = 0;
  var i = Math.max(digits1.length, digits2.length) - 1;
  var negative = false;
  
  if (compare(digits1,digits2) === -1) {
    var tmp = digits1;
    digits1 = digits2;
    digits2 = tmp;
    negative = true;
  }

  for (; i >= 0; i--) {
    diff = (digits1.pop() || 0) - (digits2.pop() || 0) - carry;
    carry = 0;
    if (diff < 0) {
      diff += 10;
      carry = 1;
    }
    result.unshift(diff);
  }

  if (negative) {
    result.unshift("-");
  }
  return result;
}

function compare(digits1, digits2) {
  if(digits1.length < digits2.length) {
    return -1;
  }

  else if(digits1.length > digits2.length) {
    return 1;
  }

  else {
    for (var j = 0; j < digits1.length; j++) {
      if (digits1[j] < digits2[j]) {
        return -1;
      }
      else if (digits1[j] > digits2[j]) {
        return 1;
      }
      
    }
    return 0;
  }
}


console.log(subtract([2,1],[2,2]));
