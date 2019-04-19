var searchInsert = function(nums, target) {
  let i = 0;
  while (i != nums.length){
      if (target == nums[i]){
          return i;
      } else if(target > nums[i]){
          i++;
      } else {
          return i;
      }
  }
  return i;
};

let nums = [];
let target = 9;
let res = searchInsert(nums,target);
console.log(res);