var majorityElement = function(nums) {
  let map = new Map();
  for (let i in nums) {
    if (map.has(nums[i])) {
      let time = map.get(nums[i]);
      map.set(nums[i], time+1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let key, val;
  for (let i of map.keys()) {
    if (!key) {
      key = i;
      val = map.get(i);
    } else {
      if(map.get(i) > val) {
        key = i;
        val = map.get(i);
      }
    }
  }
  return key;
};

let arr = [2,3,4,2,2];
let res =  majorityElement(arr);
console.log(res);