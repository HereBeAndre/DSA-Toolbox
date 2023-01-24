/**
 * @function binarySearchRecursive
 * @param {number[]} nums
 * @param {number} target
 * @param {number} low
 * @param {number} high
 * @returns {boolean | -1}
 */
const binarySearchRecursive = (
  nums,
  target,
  low = 0,
  high = nums.length - 1
) => {
  if (low > high) return -1;

  const midpoint = Math.floor(low + (high - low) / 2);

  if (target === nums[midpoint]) return midpoint;

  if (target < nums[midpoint]) {
    return binarySearchRecursive(nums, target, low, midpoint - 1);
  } else {
    return binarySearchRecursive(nums, target, midpoint + 1, high);
  }
};

const list = [
  1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 23, 24, 45, 67, 77, 88, 89, 100, 121, 122,
  123, 124,
];

console.log(binarySearchRecursive(list, 88)); // 16
console.log(binarySearchRecursive(list, 36)); // -1
