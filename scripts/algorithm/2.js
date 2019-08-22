function minInMax(n, arr) {
    for (let i in arr) {
        arr[i] = parseInt(arr[i]);
    }
    let result = [];
    for (let i = 1;  i <= n; i++) {
        let nums = [];
        let res = Math.max(...arr);
        for (let j = 0; j < n; j++) {
            nums = arr.slice(j, j + i);
            if (nums.length < i) {
                continue;
            }
            let num = Math.max(...nums);
            // console.log(j, nums, num);
            if (num < res) {
                res = num;
            }
        }
        // console.log(res);
        result.push(res);
    }
    console.log(result);
}
minInMax(6, [1,3,2,4,6,5]);