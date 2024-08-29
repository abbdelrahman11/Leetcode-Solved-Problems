/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = {};
  let col = {};
  let three = {};
  for (let index = 0; index < 9; index++) {
    for (let index2 = 0; index2 < 9; index2++) {
      const element = board[index][index2];
      if (element != ".") {
        if (
          three[
            `${Math.floor(index / 3) * 3 + Math.floor(index2 / 3)}-${element}`
          ] ||
          col[`${index2}-${element}`] ||
          row[`${index}-${element}`]
        ) {
          return false;
        }

        row[`${index}-${element}`] = true;
        col[`${index2}-${element}`] = true;
        three[
          `${Math.floor(index / 3) * 3 + Math.floor(index2 / 3)}-${element}`
        ] = true;
      }
    }
  }
  return true;
};