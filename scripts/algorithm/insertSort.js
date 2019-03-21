function insertSort(arr){
  let len=arr.length;
  var b=[];
  b[0]=arr[0];
  for (let i=1;i<len;i++){
    let letter=arr[i];
    for(var k=i-1;b[k]>=letter;k--){
        b[k+1]=b[k];
    }
        b[k+1]=letter;
  }
  return b; 
}
let arr=[3,5,6,7,8,4,9,2];
arr=insertSort(arr);
console.log(arr);
