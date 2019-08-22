function find_mix (arr) {
    let len = arr.length;
    let min_diff = Math.abs(arr[0] - arr[1]);
    let res = [];
    for (let i = 1; i < len - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i+1]);
        if (diff < min_diff) {
            min_diff = diff;
            res = [];
            res.push(arr[i], arr[i+1]);
        }
        // if (typeof min_diff === 'undefined') {
        //     min_diff = diff; 
        //     res.push(arr[i], arr[i+1]);
        // }
    }
    console.log(res.join(' '));
}
let str = "1 3 4 3 2 6 5 12 10";
let arr = str.split(' ');
find_mix(arr);