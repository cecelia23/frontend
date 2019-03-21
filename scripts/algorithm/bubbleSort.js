function bubbleSort(){
  let temp;
  let len=arr.length;
  for (let i=1;i<len-1;i++)
  {
    for(let k=len-1;k>=i;k--){
      if (arr[k]<arr[k-1]){
        temp=arr[k];
        arr[k]=arr[k-1];
        arr[k-1]=temp;
      }
    }
  }
}
var arr=[2,5,9,4,8,7,1,3,6];
bubbleSort();
console.log(arr);