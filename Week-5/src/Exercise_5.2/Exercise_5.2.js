function vowelCount(str) {
    const vowels = 'aeiou'; // O(1) space
    let vowelMap = new Map(); // O(n) space
    for (let char of str.toLowerCase()) { // O(n) time
      if (vowels.includes(char)) { // O(1) time
        let count = vowelMap.get(char) || 0; // O(1) time
        vowelMap.set(char, count + 1); // O(1) time
      }
    }
    return vowelMap; // O(n) space
  }

  module.exports = vowelCount