// function merge(arr1,arr2){
//    let len1=arr1.length;
//    let len2 = arr2.length;
//    let new_arr = [];
//    let i = 0, j = 0, k = 0;
//    while (j != len1 && k != len2){
//      if (arr1[j] <= arr2[k]){
//       new_arr[i] = arr1[j];
//       i++;
//       j++;
//      }else {
//        new_arr[i] = arr2[k];
//        i++;
//        k++;
//      }
//    }
//    if (j == len1){
//      while (k < len2){
//        new_arr[i] = arr2[k];
//        i++;
//        k++;
//      }
//    }else{
//      while(j<len1){
//        new_arr[i] = arr1[j];
//        j++;
//        i++;
//      }
//    }
//    console.log(new_arr);
//    return new_arr;
// }
var merge = function(nums1, m, nums2, n) {
  nums1.length = m+n;
  if (n == 0){
    return nums1;
  }
  if (m == 0){
    for (let i=0;i< n;i++){
      nums1[i] = nums2[i];  
    }
    return nums1;
  }
  let i = 0, k = 0;
  while (k < n){
    for (let j = k+m;j > i;j--){
      if (nums2[k] > nums1[j-1]){
        nums1[j] = nums2[k];
        i = j;
      }else {
        nums1[j] = nums1[j-1];
      }
    }
    if (i == 0){
      nums1[0] = nums2[k];
    }
    k++;
  }
  console.log(nums1);
  return nums1;
};
let arr1=[-1,-1,0,0,0,0];
// let arr2=[2,5,7,9,10];
let arr2 = [-1,0];
let res = merge(arr1,4,arr2,2);
console.log(res);