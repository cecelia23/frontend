// 二分查找
// 非递归，循环
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left+right)/2);
    if (target == nums[mid]){
      return mid;
    } else if (target < nums[mid]){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (left > right) {
    return -1;
  }
    // return mid;
};

//递归，非循环
// var search = function (nums,left,right,target) {
//   if (left > right || left < 0 || right >= nums.length) {
//     return -1;
//   } else {
//     let mid = Math.floor((left + right)/2);
//     if (target == nums[mid]){
//       return mid;
//     } else if(target < nums[mid]) {
//       return search(nums,left,mid-1,target);   //压栈，当最后有返回值时，一次性弹出
//     } else {
//       return search(nums,mid+1,right,target);
//     }
//   }
// }
let nums = [-1,0,3,5,9,12];
let target = 9;
// let res = search(nums,target);
let res =search(nums,0,nums.length-1,target);
console.log(res);