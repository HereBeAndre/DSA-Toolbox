/**
 * Given a non-empty array of integers, find the one that appears only once.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * @param {Number[]} nums
 * @returns {Number}
 */
const findUniqueNumber = (nums) => nums.reduce((acc, curr) => acc ^ curr, 0);

console.log(findUniqueNumber([4, 1, 2, 1, 2])); // 4
