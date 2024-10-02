/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let leftIndex = 0;
  let rightIndex = 1;
  let max = 0;
  while (rightIndex < prices.length) {
    if (prices[leftIndex] < prices[rightIndex]) {
      max = Math.max(max, prices[rightIndex] - prices[leftIndex]);
    } else {
      leftIndex = rightIndex;
    }
    rightIndex++;
  }
  return max;
};
