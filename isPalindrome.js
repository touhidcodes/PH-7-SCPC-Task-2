// Write a code to calculate if the string is palindrome?

const isPalindrome = (str) => {
  const pureStr = str.replace(/[^a-zA-Z0-9_]/g, "").toLowerCase();

  const reversedStr = pureStr.split("").reverse().join("");

  if (pureStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// // Example:
const inputString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputString));
// Output: true
