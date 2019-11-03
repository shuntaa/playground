function add(a, b) {
  return a + b;
}
console.log(add(5, 8));

//callback function
function log() {
  console.log(new Date().toString());
}
//setTimeout(log, 1000);
setInterval(log, 1000);
