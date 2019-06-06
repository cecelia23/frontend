var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let tag = nums[0], idx = 0;
    let i = 1;
    while (i < nums.length) {
        if (nums[i] === tag) {
            i++;
        } else {
            let diff = i - idx - 1;
            nums.splice(idx+1, diff);
            idx += 1;
            i = idx + 1;
            tag = nums[idx];
        }
    }
    let del_end = nums.length - 1 - idx;
    if (del_end) {
        nums.splice(idx, del_end);
    }
    return nums.length;
};

let res = removeDuplicates([1,1,2]);
console.log(res);