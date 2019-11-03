console.log("===string===");
var string = "abc";
for (var i = 0; i < string.length ; i++ ) {
  console.log(i + ":" + string[i])
}

//not recomended
for (var i in string) {
  console.log(i + ":" + string[i])
}

//ES6
for (var char of string) {
  console.log(char)
}


console.log("===array===");
var array = ["x","y","z"];
for (var i = 0; i < array.length ; i++ ) {
  console.log(i + ":" + array[i])
}

//not recomended
for (var i in array) {
  console.log(i + ":" + array[i])
}

//ES6
for (var elem of array) {
  console.log(elem)
}

console.log("===object===");
var object = {a: 10, b: 20, c: 30};
for (var key in object) {
  console.log(key + ":" + object[key])
}
