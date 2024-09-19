/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  res = [];
  nums = nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == nums[index - 1] && index > 0) continue;

    let leftIndex = index + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      if (nums[leftIndex] + nums[rightIndex] + nums[index] < 0) {
        leftIndex++;
      } else if (nums[leftIndex] + nums[rightIndex] + nums[index] > 0) {
        rightIndex--;
      } else {
        res.push([nums[index], nums[leftIndex], nums[rightIndex]]);
        leftIndex++;
        while (
          nums[leftIndex] == nums[leftIndex - 1] &&
          leftIndex < rightIndex
        ) {
          leftIndex++;
        }
      }
    }
  }
  return res;
};