var maxSubArray = function(nums) {
    // let sum = nums[0];
    // for (let i = 0; i < nums.length; i++) {
    //   let tag = nums[i];
    //   if (tag > sum) {
    //     sum = tag;
    //   }
    //   for (let j = i + 1; j < nums.length; j++) {
    //     tag += nums[j];
    //     if (tag > sum) {
    //       sum = tag;
    //       // console.log(i,j,tag);
    //     }
    //   }
    // }

    // 简单解法 O(n)
    let sum = Math.min.apply(Math,nums);
    let tailNum = 0;
    for (let i in nums) {
      tailNum += i;
      sum = Math.max(sum, tailNum);  // 保留较大的那个
      tailNum = Math.max(tailNum, 0);  // 之前的和是否值得保留
    }
    return sum;
};
let res = maxSubArray([-2,1]);
console.log(res);