/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length <= 1) return false;
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element == "(" || element == "[" || element == "{") {
      stack.push(element);
    } else {
      let topEle = stack.pop();

      if (
        !(topEle == "(" && element == ")") &&   
        !(topEle == "[" && element == "]") &&  
        !(topEle == "{" && element == "}") 
      ) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};