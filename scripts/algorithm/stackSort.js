// function stackSort(arr){
//   // 1.构建大顶堆
//   for (let i=arr.length/2-1;i>=0;i--){
//     // 从第一个非叶子结点开始，从右往左，从下往上调整
//     adjustHeap(arr,i,arr.length);
//   }
//   // 2.交换首尾结点
//   for (let k=arr.length-1;k>0;k--){
//     swap(arr,0,k);
//     adjustHeap(arr,0,k);
//   }
//   // return arr;
// }
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// 调整大根堆
// function adjustHeap(arr,i,length){
//   let temp = arr[i];
//   for (let k=2*i+1;k<length;k=2*k+1) {
//     if (k<length-1 && arr[k]<arr[k+1]){  // 左子结点小于右子节点，指向右子结点
//       k++;
//     }
//     if (temp<arr[k]){ //如果子节点大于父节点，将子节点值赋给父节点（不用进行交换）
//       arr[i] = arr[k];
//       i = k;
//     }else{
//       break; //前一步操作，对顶元素改变了，从上到下，如果上面的没变，下面的就不需要动了
//     }
//   }
//   arr[i] = temp;
// }

function stackSort (arr) {
  for (let i=arr.length/2-1;i>=0;i--) {
    adjustHeap(arr,i,arr.length);
  }
  for (let k=arr.length-1;k>0;k--) {
    swap(arr,k,0);
    adjustHeap(arr,0,k);
  }
  return arr;
}

function adjustHeap (arr,i,length) {
  let temp = arr[i];
  for (let k=2*i+1;k<length;k=2*k+1){
    if (arr[k]<arr[k+1] && k<length-1){
      k++;
    }
    if (temp < arr[k]) {
      arr[i] = arr[k];
      i = k;
    }else{
      break;
    }
  }
  arr[i] = temp;
}
var arr = [9,8,7,6,5,4,3,2,1,0];
arr=stackSort(arr);
console.log(arr);
