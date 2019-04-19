// var findDuplicates = function(nums) {
//     let res = [];
//     for (let i = 0;i < nums.length; i++) {
//       let idx = nums.indexOf(nums[i]);
//       if (idx != i) {
//         res.push(nums[i]);
//       }
//     }
//     return res;
// };

var findDuplicates = function(nums) {
  let res = [];
  let set = new Set();
  let size = set.size;
  for (let i of nums) {
    set.add(i);
    if (set.size == size) {
      res.push(i);
    }
    size = set.size;
  }
  return res;
}
let nums = [2,4,5,6,4,3,2];
let res = findDuplicates(nums);
console.log(res);