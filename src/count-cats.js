module.exports = function countCats(matrix) {
  let amount = 0;
  for(let i=0; i<matrix.length;i++){
    for(let j=0; j<(matrix[i]).length;j++){
      if(matrix[i][j]=="^^"){
          amount++;
      }
    }
  }
  return amount;
};
