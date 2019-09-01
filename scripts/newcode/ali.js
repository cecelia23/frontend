function generateMatrix(column, total) {
    const matrixData = [];
    let row = Math.floor(total/column)+1;
    let fill = Math.floor(total/column);
    let rest = total % column;
    for (let i=0;i<fill;i++){
        let arr = [];
        for (let j =0; j<column;j++){
            arr.push(1);
        }
        matrixData.push(arr);
    }
    let arr = [];
    for (let i=0;i<rest;i++){
        arr.push(1);
    }
    for (let i=rest;i<column-1;i++){
        arr.push(0);
    }
    arr.push("*");
    matrixData.push(arr);
    return matrixData;
  }

  let re = generateMatrix(3,0);
  console.log(re);