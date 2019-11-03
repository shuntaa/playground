var values = [10, -10, 20, 0, 99];
for (var elem of values) {
  if (elem < 0) {
    console.log(elem + ":" + "negative");
  }
  else if (elem > 0) {
    console.log(elem + ":" + "positive");
  }
  else {
    console.log(elem + ":" + elem);
  }
}

