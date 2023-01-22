/* Big-O Analysis:
    Time Complexity => Average and worst case scenario O(N^2) - If data is almost sorted, then best case scenario is linear O(N)
    Space Complexity: O(1)
*/

/**
 * @function insertionSort
 * @param {(number[])} nums
 * @returns {(number[])}
 */
const insertionSort = (nums) => {
  const length = nums.length;
  if (length < 2) return nums;

  for (let i = 1; i < length; i++) {
    let curr = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > curr) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = curr;
  }
  return nums;
};

console.log(insertionSort([10, 4, 17, 3, 5, 1, 8, 0, 27])); // [ 0, 1, 3, 4, 5, 8, 10, 17, 27 ]
