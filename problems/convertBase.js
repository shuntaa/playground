function convert(digits, b1, b2) {
  var result = [];
  var sum = 0;
  var remainder;
  for (var i = 0; i < digits.length;  i++) {
    sum += Math.pow(b1, digits.length - i -1) * digits[i];
  }
  while (sum >= b2) {
    remainder = sum % b2
    sum = Math.floor(sum / b2);
    result.unshift(remainder);
  }
  result.unshift(sum); 
  return result;
}

console.log(convert([2,1], 10, 3));
