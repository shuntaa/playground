function numberToDigits(num) {
  var result = [];  
  for (var n = num; n > 0;) {
    result.unshift(n % 10);    
    n = Math.trunc(n / 10);
  }
  return result;
}
function numberToDigits2(num) {
  return num.toString().split("").map(x => parseInt(x));
}

console.log(numberToDigits2(2342));

