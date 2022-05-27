function toInteger(romanNumeral) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  return romanNumeral
    .match(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g) 
    // g = global, and returns all matches instead of just the first match
    .reduce((sum, value) => sum + legend[value], 0);

}

console.log(toInteger("MCMXCIV"));

// See here for how .reduce works: https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332