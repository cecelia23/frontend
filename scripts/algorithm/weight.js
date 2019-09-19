function weight (input) {
    let map = new Map();
    let arr;
    for (let i in input) {
        arr = input[i];
        for (let j in arr) {
            arr[j] = parseInt(arr[j]);
        }
        if (!map.has(arr[0])) {
            let val = new Object()[arr[1]] = arr[2];
            map.set(arr[0], val);
        }
    }
    console.log(map);
}
weight([[1,2,2],[2,3,1],[2,4,2]]);