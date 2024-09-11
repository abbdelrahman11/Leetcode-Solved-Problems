/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = (tokens) => {
  let stack = [];
  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];
    if (element == "+" || element == "-" || element == "*" || element == "/") {
      let firstEle = stack.pop(element);
      let secondEle = stack.pop(element);
      if (element == "+") {
        stack.push(+secondEle + +firstEle);
      } else if (element == "-") {
        stack.push(secondEle - firstEle);
      } else if (element == "*") {
        stack.push(firstEle * secondEle);
      } else if (element == "/") {
        stack.push(Math.floor((secondEle / firstEle) | 0));
      }
    } else {
      stack.push(element);
    }
  }
  return stack[0];
};