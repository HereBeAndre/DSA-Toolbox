/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * @param {(number[])} nums
 * @returns {(number[])}
 *
 */
const moveZeroes = (nums) => {
  for (
    let slowPointer = 0, fastPointer = 0;
    fastPointer < nums.length;
    fastPointer++
  ) {
    if (nums[fastPointer] !== 0) {
      [nums[slowPointer++], nums[fastPointer]] = [
        nums[fastPointer],
        nums[slowPointer],
      ];
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
