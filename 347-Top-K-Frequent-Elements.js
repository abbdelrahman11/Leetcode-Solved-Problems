/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const element of nums) {
    map.set(element, (map.get(element) || 0) + 1);
  }
   const sortedByValues = [...map].sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let index = 0; index < k; index++) {
    res.push(sortedByValues[index][0]);
  }
   return res;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
