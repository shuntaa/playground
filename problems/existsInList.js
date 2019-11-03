function exist(element, array) {
  for(var i = 0; i < array.length; i++) {
    if(element === array[i]) {
      return true;
    }
  }
  return false;
}

function exist2(element, array) {
  var index = array.indexOf(element);
  if(index >= 0) {
    return true;
  }
  else {
    return false;
  }
  //return index >= 0 ? true : false;
}

console.log(exist2(7, [3,5,6,7,8]));
