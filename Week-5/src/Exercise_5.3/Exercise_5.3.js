function hasDuplicate(arr) {
  let set = new Set(arr); // O(n) space and time
  return set.size !== arr.length; // O(1) time
}

module.exports = hasDuplicate