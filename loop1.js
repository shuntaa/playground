var nested = [
  {
    a: [1, 2, 3, 4, 5],
    b: [6, 7, 8, 9, 10]
  },
  {
    a: [11, 12, 13, 14, 15],
    b: [16, 17, 18, 19, 20]
  }
];

for (var object of nested) {
  for (var key in object) {
    for (var elem of object[key]) {
      console.log(elem);
    }
  }
}

var nested1 = [
  {a: 1, b: 2},
  {a: 3, b: 4}
];

for (var elem of nested1) {
  //console.log(elem);
  for (var key in elem) {
    console.log(elem[key])
  }
}

