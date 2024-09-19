/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  res = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    let area =
      (rightIndex - leftIndex) *
      Math.min(height[rightIndex], height[leftIndex]);
    res = Math.max(res, area);
    if (height[rightIndex] < height[leftIndex]) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return res;
};