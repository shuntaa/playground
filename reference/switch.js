var fruits = ["banana", "strawberry", "orange", "apple" ,"lettuce"];
for (var elem of fruits){
  switch (elem) {
    case "banana":
      console.log(elem + ":yellow");
      break;
    case "orange":
      console.log(elem + ":orange");
      break;
    case "strawberry":
    case "apple":
      console.log(elem + ":red");
      break;
    default:
      console.log(elem + " is not a fruit");
  }
}
