/**
 * @function houseRobber
 * @link https://leetcode.com/problems/house-robber/
 * @description Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob.
                Input: nums = [2,7,9,3,1]
                Output: 12
                Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
                Total amount you can rob = 2 + 9 + 1 = 12.
 * @description Time Complexity: O(N)
                Space Complexity: O(N)
 * @param {number[]} nums
 * @returns {number}
 */
const houseRobber = (nums) => {
  const length = nums.length;
  if (length === 0) return 0; // No house to rob, loot is 0
  if (length === 1) return nums[0]; // Just one house, max loot is that house
  if (length === 2) return Math.max(nums[0], nums[1]); // Return max loot from 2 houses

  const dp = Array(length); // dp -> dynamic programming - last item of this array always contains biggest loot possible
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // Start from 2 as indexes 0 and 1 are already covered
  for (let i = 2; i < length; i++) {
    /* 
          Last item of array dp is either:
          1. Current item in array + item before the previous - a.k.a. dp[i-2]
          2. Item in dp before the current index - a.k.a. dp[i - 1]
      */
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[length - 1]; // Return last item in array dp as it's always the biggest possible loot
};

/* EXAMPLE
  
      nums = [1, 2, 3, 1]
  
      dp = [1, 2, , ]
  
      ~ FOR LOOP
          i = 2
          dp[2] = Math.max(3 + 1, 2)
  
          dp = [1, 2, 4, ]
  
          i = 3
          dp[3] = Math.max(1 + 2, 4)
          dp = [1, 2, 4, 4]
      ~ END FOR LOOP
  
      return dp[length] => dp[4] => 4
  
  */
