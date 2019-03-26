let num=[3,2,4]
var twoSum = function(nums, target) {
   var sum=0;
   var new_num=new Array(2);
    for(let i=0;i<nums.length-1;i++){
      for (let j=i+1;j<nums.length;j++){
        // sum=nums[i]+nums[j];
        // if (sum===target){
          if (nums[i]+nums[j] === target){
          new_num[0]=i;
          new_num[1]=j;
        }
      }
    }
    return new_num;
};
let target=6;
let res=twoSum(num,target);
console.log(res);