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
    swap(array, i, minIndex);
  }
  return array;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(selectionSort([2, 10, 9, 30, 5]));
