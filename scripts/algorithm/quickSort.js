// function quickSort(start,end){
//   // 分治法，二叉树
//   if (start>=end){
//     return;
//   }
//   let temp=arr[start],t,i=start,j=end;
//   while (i!=j){
//     while(arr[j]>=temp&&i<j){
//       j--;   // 从右边扫描，找到比temp小的
//     }
//     while(arr[i]<=temp&&i<j){
//       i++;   // 从左边扫描，找到比temp大的
//     }
//     if (i!=j){
//       t=arr[i];
//       arr[i]=arr[j];
//       arr[j]=t;
//     }
//     // 交换i,j位置处的值后，继续扫描
//   }
//   arr[start]=arr[i];
//   arr[i]=temp;
//   quickSort(start,i-1);
//   quickSort(i+1,end);
// }

// var arr=[6,5,4,3,2,1];
// // console.log(arr[0],arr[arr.length-1])
// quickSort(0,arr.length-1);
// console.log(arr)
function quickSort(arr,left,right){
  if (left >= right) {
    return ;
  }
  let i = left, j = right, std = arr[left];
  while(i != j) {
    while (arr[j] >= std && j > i) {
      j--;
    }
    while (arr[i] <= std && j > i) {
      i++;
    }
    if (j != i) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  }
  arr[left] = arr[i];
  arr[i] = std;
  quickSort(arr,left,i-1);
  quickSort(arr,i+1,right);
}
let arr=[3,5,6,7,8,2,1];
quickSort(arr,0,arr.length-1);
console.log(arr);