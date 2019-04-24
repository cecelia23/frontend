var findPeakElement = function(nums) {
  let i = 1, len = nums.length;
  let res = [];
  if (len < 3) {
    return [];
  }
    while (i < nums.length-1){
      if (nums[i] > nums[i-1] && nums[i] > nums[i+1]){
        res.push(i);
      } 
      i++;
    }
    return res;
    // return i;
};

let nums= [1,2,1,3,5,6,4];
let res = findPeakElement(nums);
console.log(res);