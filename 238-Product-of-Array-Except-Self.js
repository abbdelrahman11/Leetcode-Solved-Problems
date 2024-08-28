/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = [];
  let right = [];
  let output = [];

  for (let index = 0; index < nums.length; index++) {
    if (index == 0) {
      left[index] = 1;
      continue;
    }
    left[index] = nums[index - 1] * left[index - 1];
  }
  for (let index = nums.length - 1; index >= 0; index--) {
    if (index == nums.length - 1) {
      right[index] = 1;
      output[index] = left[index] * right[index];
      continue;
    }
    right[index] = nums[index + 1] * right[index + 1];
    output[index] = left[index] * right[index];
  }

  return output;
};