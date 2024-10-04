/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let hash = new Map();
  let left = 0;
  let res = 0;
  for (let right = 0; right < s.length; right++) {
    hash.set(s[right], (hash.get(s[right]) || 0) + 1);

    if  (right - left + 1 - Math.max(...hash.values()) > k) {
      hash.set(s[left], hash.get(s[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};