/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toUpperCase();
  s = s.replace(/\W/g, "");
  s = s.replace("_", "");
  let il = 0;
  let ir = s.length - 1;
  while (il < ir) {
    if (s[il] != s[ir]) {
      return false;
    }
    il++;
    ir--;
  }
  return true;
};