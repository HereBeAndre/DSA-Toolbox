/**
 * @function binarySearchIterative
 * @param {number[]} nums
 * @param {number} target
 * @returns {boolean | -1}
 */
const binarySearchIterative = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (high >= low) {
    const midpoint = Math.floor(low + (high - low) / 2);

    if (target === nums[midpoint]) return midpoint;

    if (target < nums[midpoint]) {
      high = midpoint - 1;
    } else {
      low = midpoint + 1;
    }
  }

  return -1;
};

const list = [
  1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 23, 24, 45, 67, 77, 88, 89, 100, 121, 122,
  123, 124,
];

console.log(binarySearchIterative(list, 100)); // 18
console.log(binarySearchIterative(list, 36)); // -1
