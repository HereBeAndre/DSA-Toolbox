/**
 * Given a string or a number as input, returns true if the input is palindrome
 * @param {(string | number)} x
 * @returns {boolean}
 */
const isPalindromeRecursive = (x) => {
  if (typeof x !== "string" && typeof x !== "number") {
    throw Error(
      `x must be of type string or number. It can't be of type ${typeof x}`
    );
  }

  const string = x.toString();
  const length = string.length;

  const start = string[0];
  const end = string[length - 1];

  if (start !== end) return false;

  if (length <= 2) return true;

  const substring = string.substring(1, length - 1);
  return isPalindromeRecursive(substring);
};

console.log(isPalindromeRecursive("pali,ilap")); // true
console.log(isPalindromeRecursive("h")); // true
console.log(isPalindromeRecursive("")); // true
console.log(isPalindromeRecursive(144441)); // true
console.log(isPalindromeRecursive(12)); // false
console.log(isPalindromeRecursive({ name: "john" })); // Error
