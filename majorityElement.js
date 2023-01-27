// https://leetcode.com/problems/majority-element/
/**
 * @function majorityElement
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @description Given an array nums of size n, return the majority element.
                The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @returns {number}
 */
const majorityElement = (nums) => {
  let candidate = nums[0];
  let counter = 1;

  for (let i = 1; i < nums.length; i++) {
    if (counter === 0) candidate = nums[i];

    if (nums[i] === candidate) {
      counter++;
    } else {
      counter--;
    }
  }
  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
