// var singleNumber = function(nums) {
//   let i = 0;
//   while(nums.length > 1) {
//     let another = nums.indexOf(nums[i], i+1);
//     if (another !== -1) {
//       nums.splice(i, 1);
//       nums.splice(another - 1 ,1);
//     } else {
//       i++;
//     }
//   }
//   return nums[0];
// };

//使用异或的解释： ((2^2)^(1^1)^(4^4)^(5)) => (0^0^0^5) => 5.
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
}

let res = singleNumber([4,2,5,1,2,4,1]);
console.log(res);