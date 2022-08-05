// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArray = [];
  if (arguments.length === 0) return newArray;
  else if (arguments === undefined) return newArray;

  for (let i = 0; i < matrix.length; i++) {
      if (i === 0 || i % 2 === 0) {
          for (let j = 0; j < matrix[i].length; j++)
              newArray.push(matrix[i][j]);
      } else if (i % 2 !== 0) {
          for (let j = matrix[i].length - 1; j >= 0; j--)
              newArray.push(matrix[i][j]);
      }
  }

  return newArray;
};
