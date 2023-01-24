/**
 * @function removeDuplicates
 * @description https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @returns {number}
 */
const removeDuplicates = (nums) => {
  let slowPointer = 0;

  for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    /* Key => When number at slowPointer is different than number at fastPointer, we
    want to copy the element at fastPointer to position ++slowPointer */
    if (nums[fastPointer] !== nums[slowPointer]) {
      nums[++slowPointer] = nums[fastPointer];
    }
  }

  // slowPointer is 0 indexed => with `+ 1`, we have the length of the array of unique values
  return slowPointer + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

/* Input: nums = [0,0,1,1,1,2,2,3,3,4]
	Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
	Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
	It does not matter what you leave beyond the returned k (hence they are underscores).
*/
