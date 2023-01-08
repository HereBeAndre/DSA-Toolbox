/**
 * Given a string or a number as input, returns true if the input is palindrome
 * @param {(string | number)} x
 * @returns {boolean}
 */
const isPalindromeIterative = (x) => {
  if (typeof x !== "string" && typeof x !== "number") {
    throw Error(
      `x must be of type string or number. It can't be of type ${typeof x}`
    );
  }

  const string = x.toString();
  const length = string.length;

  if (length < 2) return true;

  for (let start = 0, end = string.length - 1; start < end; start++, end--) {
    if (string[start] !== string[end]) return false;
  }
  return true;
};

console.log(isPalindromeIterative("pali,ilap")); // true
console.log(isPalindromeIterative("h")); // true
console.log(isPalindromeIterative("")); // true
console.log(isPalindromeIterative(144441)); // true
console.log(isPalindromeIterative(12)); // false
console.log(isPalindromeIterative({ name: "john" })); // Error
