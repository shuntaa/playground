function selectionSort(array) {
  var minIndex;
  var temp;
  for (var i = 0; i < array.length; i++) {
    minIndex = i;
    for (var j = i+1; j < array.length; j++) {
      if (array[minIndex] > array[j] ) {
        minIndex = j;
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}


console.log(selectionSort([2, 10, 9, 30, 5]));
