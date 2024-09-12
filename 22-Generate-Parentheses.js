/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let stack = [];
  let res = [];

  function backTrack(openN, closedN) {
    if (openN == n && closedN == n) {
      res.push(stack.join(""));
      return;
    }

    if (openN < n) {
      stack.push("(");
      backTrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backTrack(openN, closedN + 1);
      stack.pop();
    }
  }
  backTrack(0, 0);
  return res;
};