var removeElement = function(nums, val) {
  let i=0;
    for (let j in nums) {
      if (nums[j] !== val){
        nums[i] = nums[j];
        i += 1;
      }
    }
    return i;
};
var nums=[0,1,2,2,3,0,4,2];
// var nums=[3,2,2,3];

var val=2;
var res=removeElement(nums,val);
console.log(res);