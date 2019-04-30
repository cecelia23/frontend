function averageCore(arr) {
  let max_num = Math.max.apply(Math,arr);
  let min_num = Math.min.apply(Math,arr);
  let sum = 0, res, tag1 = 0, tag2 = 0;
  for (let i in arr) {
    if (arr[i] != max_num && arr[i] != min_num){
      sum += arr[i];
    }else if (arr[i] == max_num) {
      if (tag1 == 0){
        tag1++;
        continue;
      }else{
        sum = sum + arr[i];
      }
    }else{
      if (tag2 == 0){
        tag2++;
        continue;
      }else{
        sum += arr[i];
      }
    }
  }
  res = sum/(arr.length-2);
  return res;
}
let res = averageCore([4,5,6,7,8,9,9,4]);
console.log(res);
