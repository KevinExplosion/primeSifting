describe('primeArray', function() {
  it("will return an array of prime numbers", function() {
    expect(primeArray()).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
});

describe('prime_sifter', function() {
  it("will return an array of prime numbers which are less than the entered number", function() {
    expect(prime_sifter(50)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });
});
