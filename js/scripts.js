function primeArray() {
  var prime = [2, 3, 5, 7];
  var array = [];
  for(var i = 2; i <= 100; i++) {
    array.push(i);
  }
  for (var k = 0; k < prime.length; k++) {
    for (var j = 1; j < 99; j++) {
      if(array[j]%prime[k] === 0) {
        if(array[j]/prime[k] !== 1) {
          var firstPart = array.slice(0,j);
          var secondPart = array.slice((j+1),array.length);
          array = firstPart.concat(secondPart);
        }
      }
    }
  }
  return array
}

function prime_sifter(number) {
  var prime = primeArray();
  for (var i = 0; i < prime.length; i++) {
    if(prime[i] > number) {
      var firstPart = prime.slice(0,i);
      return firstPart;
    }
  }
}
