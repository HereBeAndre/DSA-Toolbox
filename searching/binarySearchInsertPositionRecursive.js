/**
 * @function binarySearchInsertPositionRecursive
 * @description Returns the index of the target item if present, otherwise returns the index where the missing item should be inserted
 * @param {number[]} nums
 * @param {number} target
 * @param {number} low
 * @param {number} high
 * @returns {boolean | -1}
 */
const binarySearchInsertPositionRecursive = (
  nums,
  target,
  low = 0,
  high = nums.length - 1
) => {
  if (low > high) return low;

  const midpoint = Math.floor(low + (high - low) / 2);

  if (target === nums[midpoint]) return midpoint;

  if (target < nums[midpoint]) {
    return binarySearchInsertPositionRecursive(nums, target, low, midpoint - 1);
  } else {
    return binarySearchInsertPositionRecursive(
      nums,
      target,
      midpoint + 1,
      high
    );
  }
};

const list = [
  1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 23, 24, 45, 67, 77, 88, 89, 100, 121, 122,
  123, 124,
];

console.log(binarySearchInsertPositionRecursive(list, 122)); // 20
console.log(binarySearchInsertPositionRecursive(list, 107)); // 19
