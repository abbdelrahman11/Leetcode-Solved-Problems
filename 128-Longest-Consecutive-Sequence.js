/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  longest = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};