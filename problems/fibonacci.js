function fibonacci(k) {
  var result = [1, 1];
  var previous = 1;
  var current = 1;
  while (result.length <= k) {
    var next = previous + current;
    result.push(next);
    previous = current;
    current = next; 
  }
  return result;
}

function fibonacci2(sequence, max) {
  if (sequence.length >= max) { 
    return sequence;
  }
  sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]); 
  return  fibonacci2(sequence, max); 
}

var result = fibonacci2([1, 1], 100);
console.log(result.length, result.join());
