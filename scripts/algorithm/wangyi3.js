function helper (nums, k) {
    let res = k;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= i) {
            res += nums[i] - i;
        } else {
            if (nums[i] + res < i) {
                return false;
            } else {
                res -= (i - nums[i]);
            }
        }
    }
    return true;
}

function jimu (m, arr) {
    let res = helper(arr, m);
    if (res) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

let n = 5, m = 2;
let arr = [0, 0, 1, 2, 1];
jimu(n, m, arr);