/**
 * Returns a tuple with indexes of the items summing up to target, or null if no such pair is found
 * @param {Array} nums
 * @param {number} target
 * @returns {(Array|null)}
 */
const findPairMatchingTarget = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return null;
};

console.log(findPairMatchingTarget([1, 2, 3, 4, 5], 10)); // null
console.log(findPairMatchingTarget([3, 7, 12, 23], 30)); // [1, 3]
