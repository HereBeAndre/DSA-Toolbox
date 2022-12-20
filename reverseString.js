/**
 * Reverses a string and returns it.
 * @param {string} string
 */

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(1)
 */

// Without built-in methods
const reverseString = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

// With built-in methods
const reverseStringBuiltIn = (string) => string.split("").reverse().join("");
