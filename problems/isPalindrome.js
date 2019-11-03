function palindrome(string) {
  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function palindrome2(string) {
  var array = Array.from(string);
  var palin = array.reverse();
  palin = palin.join("");
  return string === palin;
}

function palindrome3(string) {
  return Array.from(string).reverse().join('') === string;
}

console.log(palindrome2("12321"))
