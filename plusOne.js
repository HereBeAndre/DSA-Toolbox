/**
 * Given a non-empty integer array digits, increment the total integer by one and return the resulting array of digits.
 * Note that you must do this in-place without making a copy of the array.
 * @param {(number[])} digits
 * @returns {(number[])}
 *
 */
const plusOne = (digits) => {
  for (let end = digits.length - 1; end >= 0; end--) {
    digits[end]++;
    if (digits[end] > 9) {
      digits[end] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([0]));
console.log(plusOne([1, 0]));
console.log(plusOne([9, 9]));
console.log(plusOne([3, 1, 4, 6]));
