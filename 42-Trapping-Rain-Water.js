/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = [];
  let right = [];
  let res = 0;
  let maxhl = 0;
  let maxhr = 0;
  for (let index = 0; index < height.length; index++) {
    if (index == 0) {
      left.push(0);
      continue;
    }
    if (height[index - 1] > maxhl) {
      maxhl = height[index - 1];
    }
    left.push(maxhl);
  }

  for (let index = height.length - 1; index >= 0; index--) {
    if (index == height.length - 1) {
      right.push(0);
      continue;
    }
    if (height[index + 1] > maxhr) {
      maxhr = height[index + 1];
    }
    right.push(maxhr);
  }

  right = right.reverse();
  for (let index = 0; index < height.length; index++) {
    let trappedWater = Math.min(right[index], left[index]) - height[index];
    if (trappedWater > 0) {
      res += trappedWater;
    }
  }

  return res;
};