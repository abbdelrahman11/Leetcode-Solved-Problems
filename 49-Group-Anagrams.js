/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let index = 0; index < strs.length; index++) {
    let element = strs[index].split("").sort().join("");
    if (!map.get(element)) {
      map.set(element, []);
    }
    map.get(element).push(strs[index]);
  }
  return Array.from(map.values());
};
 
