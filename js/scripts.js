function prime_sifter() {
  var prime = 2;
  var array = [];
  for(var i = 2; i <= 100; i++) {
    array.push(i);
  }
  for (var j = 1; j < 99; j++) {
    if(array[j]%prime === 0) {
      var firstPart = array.slice(0,j);
      var secondPart = array.slice((j+1),array.length);
      console.log(firstPart);
      console.log(secondPart);
      array = firstPart.concat(secondPart);
      console.log(array);
    }
  }
  return array
}
