function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
// */
//   isPalindrome
//   1. split the word into an array
//   2. reverse the string 
//   4. compare the reversed array to the original array
//   5. return true or false

/*
  Add written explanation of your solution here
*/

function isPalindrome(word) {
  let wordArray = word.split("");
  let reversedWord = wordArray.reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


