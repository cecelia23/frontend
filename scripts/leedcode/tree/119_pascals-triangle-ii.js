var getRow = function(rowIndex) {
  function generate(index,temp) {
    let arr = [];
    arr[0] = 1;
    arr[index] = 1;
    if (index < 2) {
      return arr;
    } 
    arr[1] = index;
    arr[index - 1] = index;
    if (index < 4) {
      return arr;
    }
    if (index > 3) {
      let num = index * (index - 1) / 2;
      arr[2] = num;
      arr[index - 2] = num;
    }
    for (let i = 3; i < index - 2; i++) {
      arr[i] = temp[i-1] + temp [i]
    }
    return arr;
  }
  let arr = [1];
  if (rowIndex === 0) {
    return arr;
  }
  let i = 1;
  while (i <= rowIndex) {
    arr = generate(i,arr);
    i++;
  }
  return arr;
};

let res = getRow(10);
console.log(res);