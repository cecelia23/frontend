function numbers (n, arr, x) {
    let sum = 0;
    for (let i in arr) {
        let num = parseInt(arr[i]);
        if (num >= x) {
            sum += 1;
            arr[i] = num-1;
        }
    }
    console.log(sum);
    return arr;
}
let res = numbers(3, [1,2,2], 3);
console.log(res);