/**
 * @function maxConsecutiveOnes
 * @description https://leetcode.com/problems/max-consecutive-ones/
 * @description Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * @param {number[]} nums
 * @return {number}
 */
const maxConsecutiveOnes = (nums) => {
  let result = 0;
  let k = 0;

  for (
    let slowPointer = 0, fastPointer = 0;
    fastPointer < nums.length;
    fastPointer++
  ) {
    if (nums[fastPointer] === 0) {
      k--;
    }

    while (k < 0) {
      if (nums[slowPointer] === 0) {
        k++;
      }
      slowPointer++;
    }
    result = Math.max(result, fastPointer - slowPointer + 1);
  }
  return result;
};

console.log(maxConsecutiveOnes([0, 0, 1, 0, 1, 1, 1, 0, 1])); // 3
