function add(digits1, digits2) {
  var result = [];
  var sum;
  var carry = 0;
  var i = Math.max(digits1.length, digits2.length) - 1;

  for (; i >= 0; i--) {
    sum = (digits1.pop() || 0) + (digits2.pop() || 0) + carry;
    carry = 0;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    }
    result.unshift(sum);
  }

  if (carry === 1) {
    result.unshift(1);
  }
  return result;
}
console.log(add([8,1],[1,4,5]));
