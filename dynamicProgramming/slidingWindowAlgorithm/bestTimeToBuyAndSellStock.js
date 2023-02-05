// This is a Dynamic Programming problem which can be solved using the two-pointers technique
/**
 * @function maxProfit
 * @description https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @description Neetcode's YouTube video: https://www.youtube.com/watch?v=1pkOgXD63yU
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxP = 0;
  let left = 0,
    right = 1; // left buys and right sells

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
    } else {
      left = right;
    }
    right += 1;
  }
  return maxP;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // OUTPUT: 5 => buying at 1 and selling at 6 gives the best profit
