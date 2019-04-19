var twoSum = function(nums, target) {
  let list={};
  let res=[];
  for (let i=0;i<nums.length;i++){
  if(typeof (list[target-nums[i]]) !== 'undefined'){
      res.push(list[nums[i]]);
      res.push(i);
    }
    list[nums[i]]=i+1;
  }
  return res;
}
let num=[3,2,4];
let target=6;
let res=twoSum(num,target);
console.log(res)