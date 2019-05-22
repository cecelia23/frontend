var wrap = function (matrix,i,j) {
    let flag;
    if (i<0 || i >= matrix.length || j<0 || j >= matrix[0].length){
       return false;
    }
    if (matrix[i][j] == 'X'){
        return false;
    } else {
        if (i == 0 || i == matrix.length-1 || j == 0 || j == matrix[0].length-1) {
            return true;
        }
        return wrap(matrix,i-1,j) && wrap(matrix,i+1,j) && wrap(matrix,i,j-1) && wrap(matrix,i,j+1);        
    }
}
var change = function(matrix) {
   for (let i = 1;i < matrix.length;i++){
    for (let j = 1;j < matrix[0].length;j++){
        if(matrix[i][j] == 'O' && !wrap(matrix,i,j)){
            matrix[i][j] = 'X';
        }
    }
   }   
  return matrix;

}
let flag = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']];
let res = change(flag);
console.log(res);