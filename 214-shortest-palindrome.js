function shortestPalindrome(string) {

  const reversed = string.split('').reverse().join('');

  for (let i = string.length; i > 0; i--) {
    if(string.slice(0, i) === reversed.slice(string.length - i)) {
      return reversed.slice(0, reversed.length - i) + string;
    }
  }

  return '';
}

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));

// A palindrome is a word, phrase, or sequence that reads the same backward and forward (ex. madam)

// const reversed:
  
  // Splits string into an array
  // Reverses the array
  // Then joins the reversed array into a string