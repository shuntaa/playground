for (var i = 0; i <= 90; i+= 5) {
  var atsumi = Math.sin(i * Math.PI / 180)  
  console.log(i + ": " + (1 - atsumi));
}
