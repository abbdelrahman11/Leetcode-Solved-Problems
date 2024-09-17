/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toUpperCase();
  s = s.replace(/\W/g, "");
  s = s.replace("_", "");
  console.log(s);
  let il = 0;
  let ir = s.length - 1;
  let left = s[il];
  let right = s[ir];
  while (il < ir) {
    if (left != right) {
      return false;
    }
    il++;
    ir--;
    left = s[il];
    right = s[ir];
  }
  return true;
};