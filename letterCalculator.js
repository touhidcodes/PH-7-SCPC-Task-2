// Write a code on how to calculate the number of vowels and consonants in a string?

const countVowelsAndConsonants = (str) => {
  const totalVowels = ["a", "e", "i", "o", "u"];

  let vowelCount = 0;
  let consonantCount = 0;

  const pureStr = str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();

  for (char of pureStr) {
    if (totalVowels.includes(char)) {
      vowelCount++;
    } else if (char !== " ") {
      consonantCount++;
    }
  }
  return { vowels: vowelCount, consonants: consonantCount };
};

// Example:
const inputString = "Hello, World!";
const counts = countVowelsAndConsonants(inputString);
console.log(counts);
// Output: { vowels: 3, consonants: 7 }
