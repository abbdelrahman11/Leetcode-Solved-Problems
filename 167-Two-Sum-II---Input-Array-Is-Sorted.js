/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let rightIndex = 0;
  let leftIndex = numbers.length - 1;
  while (numbers[rightIndex] <= numbers[leftIndex]) {
    if (numbers[rightIndex] + numbers[leftIndex] == target) {
      return [rightIndex + 1, leftIndex + 1];
    } else if (numbers[rightIndex] + numbers[leftIndex] < target) {
      rightIndex++;
    } else {
      leftIndex--;
    }
  }
};