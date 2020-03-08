function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var minIndex = findMin(array, i);
    swap(array, i, minIndex);
  }
  return array;
}

function findMin(array, from) {
  var minIndex = from;
  for (var j = from +1; j < array.length; j++) {
    if (array[minIndex] > array[j] ) {
      minIndex = j;
    }
  }
  return minIndex;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(selectionSort([2, 10, 9, 30, 5]));
